import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { endpoint } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/manga/detail/" + endpoint)
      .then((resp) => {
        setDetail(resp.data);
      });
  }, []);

  return (
    <>
      <h1>Detail Page: {detail.title}</h1>
      <img src={detail.thumb} />
    </>
  );
};

export default DetailPage;
