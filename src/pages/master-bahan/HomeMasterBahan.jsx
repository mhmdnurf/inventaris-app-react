import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomeMasterBahan = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getBahan = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/master-bahan"
      );
      setData(response.data.allBahan);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    getBahan();
    setIsLoading(false);
  }, [getBahan]);

  const handleAddData = () => {
    navigate("/master-bahan/create");
  };

  return (
    <>
      {isLoading ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <h1>Hello World</h1>
          <button onClick={handleAddData}>Tambah Data</button>
          {data.map((item) => (
            <li key={item._id}>{item.namaBahan}</li>
          ))}
        </>
      )}
    </>
  );
};

export default HomeMasterBahan;
