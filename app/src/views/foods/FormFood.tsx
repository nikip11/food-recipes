import { Form, Formik, FormikHelpers } from "formik";
import { Food } from "@/interfaces/types";
import Button from "@/components/ui/Button";
import TextField from "@/components/formFields/TextField";
import { useGetCategory, useSaveCategory } from "@/hooks/useCategory";
import { useEffect, useMemo } from "react";
import AutocompleteField from "@/components/formFields/AutocompleteField";
import FormControl from "@/components/formFields/FormControl";
import { useSaveFood } from "@/views/foods/hooks/useFoods";
import * as Yup from "yup";

const initialValues: Food = {
  name: "",
  kc_100: 0,
  kc_portion: 0,
  portion: 0,
  category: null
}

const schemaValidation = Yup.object().shape({
  title: Yup.string().required("El nombre es requerido"),
})

export default function FormFood({ formData, closeForm }: { formData: Food | null, closeForm: () => void }) {
  const { categories, getCategories } = useGetCategory()
  const { saveFood, isPending } = useSaveFood()
  const { saveCategory } = useSaveCategory()

  function handleSubmit(values: Food, { resetForm }: FormikHelpers<Food>) {
    saveFood(values)
    resetForm()
    closeForm()
  }

  const addNewCategory = async (query: string) => {
    await saveCategory({ name: query })
    getCategories()

  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <Formik
        initialValues={formData ?? initialValues}
        onSubmit={handleSubmit}
        validationSchema={schemaValidation}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <TextField
              id="title"
              placeholder="100g"
              require
              label="Nombre" />

            <TextField
              id="value100"
              label="Calorías"
              placeholder="100g"
              require
              type="number" />

            <TextField
              id="portion"
              label="Porción"
              placeholder="100g"
              type="number" />

            <TextField
              id="kc_portion"
              label="kc porcion"
              placeholder="100g"
              type="number" />

            <AutocompleteField
              id="category"
              label="Categorías"
              itemKey="name"
              addNew={addNewCategory}
              items={categories} />

            <FormControl>
              <Button type="submit" disabled={isSubmitting || !isValid || isPending}>Submit</Button>
              {isPending && <div>Loading...</div>}
              <Button type="button" disabled={isSubmitting || isPending}>Clear</Button>
            </FormControl>
          </Form>
        )}

      </Formik>
    </>
  )
}