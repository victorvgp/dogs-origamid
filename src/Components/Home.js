import React from "react";
import Feed from "./Feed/Feed";
import Read from "./Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Read title="Fotos" description="Home do site dogs, com o feed de fotos. " />
      <Feed />
      {/* <Loading /> */}
    </section>
  );
};

export default Home;
