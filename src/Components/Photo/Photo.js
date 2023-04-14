import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../Api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";
import Read from "../Helper/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, req } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    req(url, options);
  }, [req, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Read title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
