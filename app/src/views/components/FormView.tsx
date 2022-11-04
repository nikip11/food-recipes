import { Form, Formik, FormikHelpers } from "formik";
import CheckboxField from "../../components/formFields/CheckboxField";
import RadioField from "../../components/formFields/RadioField";
import SelectField from "../../components/formFields/SelectField";
import TextField from "../../components/formFields/TextField";
import Button from "../../components/ui/Button";

type Values = {
  name: string
  lastname: string
  email: string
  label: boolean
  radio: string
  selector: string
}

const initialValues: Values = {
  name: '',
  lastname: '',
  email: '',
  label: false,
  radio: '',
  selector: ''
}

export default function FormView() {
  function handleSubmit(values: Values, { resetForm, setSubmitting }: FormikHelpers<Values>) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 2000);
    resetForm()
  }
  return (
    <div className="">
      <h1>Form Fields</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <TextField id="name" label="Nombre" placeholder="nombre" required />
            <TextField id="lastname" label="Apellidos" placeholder="apellido" required />
            <TextField id="email" label="Correo Electrónico" placeholder="email" type="email" required />
            <CheckboxField id="label" label="label" />
            <RadioField id="radio" label="radio" />
            {/* <SelectField id="selector" label="selector" items={[]} /> */}
            <Button type="submit" disabled={!isValid || !dirty}>Enviar</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}