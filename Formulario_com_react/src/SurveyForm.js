import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";

// Esquema de validação com Yup
const SurveySchema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  age: Yup.number()
    .min(10, "A idade mínima é 10 anos")
    .max(100, "A idade máxima é 100 anos")
    .required("A idade é obrigatória"),
});

const SurveyForm = () => {
  const handleSubmitting = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.info("Dados enviados:", JSON.stringify(values, null, 2));
      alert("Formulário enviado com sucesso!");
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className="form-wrapper">
      <header>
        <section id="cabeçalho">
          <h1 id="title">Pesquisa de Satisfação</h1>
          <p id="description">
            Preencha o formulário abaixo para nos ajudar a melhorar nossos
            serviços.
          </p>
        </section>
      </header>

      <main>
        <Formik
          validationSchema={SurveySchema}
          initialValues={{
            name: "",
            email: "",
            age: "",
            interest: "frontend",
            recommend: "",
            technologies: [],
            comments: "",
          }}
          onSubmit={handleSubmitting}
        >
          {({ isSubmitting }) => (
            <Form id="survey-form">
              <label id="name-label" htmlFor="name">
                Nome
              </label>
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="Digite seu nome"
              />
              <ErrorMessage name="name" className="error-msg" component="div" />

              <label id="email-label" htmlFor="email">
                Email
              </label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu email"
              />
              <ErrorMessage
                name="email"
                className="error-msg"
                component="div"
              />

              <label id="number-label" htmlFor="age">
                Idade
              </label>
              <Field
                id="age"
                type="number"
                name="age"
                placeholder="Informe sua idade"
              />
              <ErrorMessage name="age" className="error-msg" component="div" />

              <label htmlFor="interest">Qual sua área de interesse?</label>
              <Field as="select" id="dropdown" name="interest">
                <option value="frontend">Front-end</option>
                <option value="backend">Back-end</option>
                <option value="dados">Ciência de Dados</option>
              </Field>

              <p>Você recomendaria este curso?</p>
              <label>
                <Field type="radio" name="recommend" value="sim" /> Sim
              </label>
              <label>
                <Field type="radio" name="recommend" value="nao" /> Não
              </label>

              <p>Quais tecnologias você já utilizou?</p>
              <label>
                <Field type="checkbox" name="technologies" value="html" /> HTML
              </label>
              <label>
                <Field type="checkbox" name="technologies" value="css" /> CSS
              </label>
              <label>
                <Field type="checkbox" name="technologies" value="javascript" />{" "}
                JavaScript
              </label>

              <p>Comentários adicionais:</p>
              <Field
                as="textarea"
                name="comments"
                placeholder="Digite aqui seus comentários..."
              />

              <button id="submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default SurveyForm;
