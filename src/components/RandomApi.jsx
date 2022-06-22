import React, { useState } from "react";
import axios from "axios";

const RandomApi = () => {

  const [keyword, setKeyword] = useState({ Search: "" });
  const [data, setData] = useState({});
  const API = "https://random-data-api.com/api/vehicle/random_vehicle";
  const fetchAPI = async () => {
    try {
      const response = await axios.get(API);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

};

export default RandomApi;
