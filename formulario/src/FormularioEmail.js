import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

// Define a validação do formulário usando Yup.
// O campo 'email' deve ser um endereço de e-mail válido e não pode ficar vazio.
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Por favor, insira um e-mail válido")  // Mensagem para e-mail inválido.
    .required("Este campo é obrigatório")  // Mensagem para campo vazio.
});

export default function FormularioEmail() {
  return (
    <div>
      <h1>Formulário de E-mail</h1>
      <Formik
        // Valores iniciais do formulário.
        initialValues={{ email: "" }}

        // Função chamada ao submeter o formulário.
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2)); // Exibe os valores do formulário em um alerta.
        }}

        // Esquema de validação do Formik.
        validationSchema={validationSchema}
      >
        {/* Renderiza o formulário */}
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              {/* Campo de entrada para o e-mail */}
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail:</label>
              <Field type="email" name="email" className="input" />

              {/* Mensagens de erro para o campo de e-mail */}
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <button type="submit" className="button">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
