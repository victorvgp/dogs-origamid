import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import Read from "../Helper/Head";

const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className="container mainSection">
      <Read title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
