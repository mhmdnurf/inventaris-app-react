import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const CreateMasterBahan = () => {
  const [formData, setFormData] = useState({
    namaBahan: "",
    kategoriBahan: "",
    satuanBahan: "",
  });
  const [kategoriBahanOptions, setKategoriBahanOptions] = useState([]);
  const [satuanBahanOptions, setSatuanBahanOptions] = useState([]);

  const navigate = useNavigate();

  const getKategori = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/kategori-bahan"
      );
      setKategoriBahanOptions(
        response.data.allKategori.map((kategori) => ({
          value: kategori._id,
          label: kategori.namaKategori,
          keterangan: kategori.keterangan,
        }))
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const getSatuan = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/satuan");
      setSatuanBahanOptions(
        response.data.allSatuan.map((satuan) => ({
          value: satuan._id,
          label: satuan.namaSatuan,
          keterangan: satuan.keterangan,
        }))
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getKategori();
    getSatuan();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/master-bahan/create",
        {
          namaBahan: formData.namaBahan,
          kategoriBahan: {
            _id: formData.kategoriBahan.value,
            namaKategori: formData.kategoriBahan.label,
            keterangan: formData.kategoriBahan.keterangan,
          },
          satuanBahan: {
            _id: formData.satuanBahan.value,
            namaSatuan: formData.satuanBahan.label,
            keterangan: formData.satuanBahan.keterangan,
          },
        }
      );
      if (response.status === 201) {
        console.log("Data berhasil disimpan");
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h2>Tambah Bahan Baru</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="namaBahan">Nama Bahan:</label>
          <input
            type="text"
            id="namaBahan"
            name="namaBahan"
            value={formData.namaBahan}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="kategoriBahan">Kategori Bahan:</label>
          <Select
            options={kategoriBahanOptions}
            value={formData.kategoriBahan}
            isSearchable={true}
            onChange={(selectedOption) =>
              setFormData({
                ...formData,
                kategoriBahan: selectedOption,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="satuanBahan">Satuan Bahan:</label>
          <Select
            options={satuanBahanOptions}
            value={formData.satuanBahan}
            isSearchable={true}
            onChange={(selectedOption) =>
              setFormData({
                ...formData,
                satuanBahan: selectedOption,
              })
            }
          />
        </div>
        <button type="submit">Tambahkan</button>
      </form>
    </div>
  );
};

export default CreateMasterBahan;
