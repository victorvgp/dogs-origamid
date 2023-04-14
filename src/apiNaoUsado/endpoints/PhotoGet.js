import React from "react";

const PhotoGet = () => {
  const [id, setId] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://dogsapi.origamid.dev/json/api/photo`)
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={id} onChange={({ target }) => setId(target.value)} />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
