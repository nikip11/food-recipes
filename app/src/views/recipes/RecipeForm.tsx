
import { TextField, FormControl, TextAreaField, AutocompleteField, ArrayField } from "@/components/formFields"
import Button from "@/components/ui/Button"
import { Food, Ingredient, Recipe } from "@/interfaces/types"
import { Formik, Form, FormikHelpers, useFormikContext } from "formik"
import { useSaveRecipe } from "@/views/recipes/hooks/useRecipes"
import * as Yup from "yup"
import { AddIcon } from "@/components/Icons"
import { useGetFoods } from "../foods/hooks/useFoods"
import { useEffect } from "react"
import Label from "@/components/formFields/Label"

type Props = {
  formData?: Recipe | null
}
const schemaValidation = Yup.object().shape({
  title: Yup.string().required("El nombre es requerido"),
})

const emptyFood: Ingredient = {
  food: {} as Food,
  weight: 0,
  portion: '',
  unit: ''
}

const initialValues: Recipe = {
  title: "",
  image: "",
  link: "",
  portions: 0,
  time: "",
  ingredients: [
    emptyFood
  ],
  preparation: "",
  tags: []
}

const unitData = ['gramos', 'cucharadas', 'tazas']


export default function RecipeForm(props: Props) {
  const { formData } = props
  const { saveRecipe, isPending } = useSaveRecipe()
  const { data: FoodData, error, getFoods } = useGetFoods()

  function handleSubmit(values: Recipe, { resetForm }: FormikHelpers<Recipe>) {
    saveRecipe(values)
    // resetForm()
  }

  function addIngredient(values: Recipe) {
    // setFieldValue('ingredients', [...values.ingredients, emptyFood])
    values = { ...values, ingredients: [...values.ingredients, emptyFood] }
  }

  useEffect(() => {
    getFoods()
  }, [])

  return (
    <>
      <Formik
        initialValues={formData ?? initialValues}
        onSubmit={handleSubmit}
        validationSchema={schemaValidation}
      >
        {({ isSubmitting, isValid, values, }) => (
          <Form>
            <TextField
              id="title"
              placeholder="..."
              require
              label="Nombre" />
            <TextAreaField
              id="preparation"
              placeholder="..."
              require
              label="Preparación" />
            <TextField
              id="portions"
              placeholder="..."
              require
              label="Porciones" />
            <TextField
              id="time"
              placeholder="..."
              require
              label="Tiempo " />
            <AutocompleteField
              id="tags"
              placeholder="..."
              items={[]}
              itemKey="title"
              multiple
              label="Etiquetas" />
            <TextField
              id="image"
              placeholder="..."
              require
              label="Imagen" />

            <TextField
              id="link"
              placeholder="..."
              require
              label="Enlace externo" />

            <ArrayField id="ingredients" label="Ingredientes" renderFields={
              (item: Ingredient, index: number) => (
                <div className="">
                  <div className="">
                    <AutocompleteField id={`ingredients[${index}].food`} label="Ingrediente" placeholder="..." items={FoodData} itemKey="title" />
                  </div>
                  <div className="flex ">
                    <TextField id={`ingredients[${index}].weight`} label="Peso" placeholder="..." />
                    <TextField id={`ingredients[${index}].portion`} label="Porción" placeholder="..." />
                    <AutocompleteField id={`ingredients[${index}].unit`} label="Unidad" placeholder="..." items={unitData} />
                  </div>
                </div>
              )
            } />

            <FormControl>
              <Button type="submit" disabled={isSubmitting || !isValid || isPending}>Submit</Button>
              {isPending && <div>Loading...</div>}
            </FormControl>
          </Form>
        )}

      </Formik>
    </>
  )
}