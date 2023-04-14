import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../Api";
import Error from "../Helper/Error";
import Read from "../Helper/Head";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, req } = useFetch();

  async function handleSubmit(event) {
    event.preventDefalt();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const { json } = await req(url, options);
      console.log(json);
    }
  }
  return (
    <section className="animeLeft">
      <Read title="Perdeu a senha" />
      <h1 className="title">Pedrceu a Senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar Email</Button>}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
