import { useState } from "react";
import "./App.css";
import List from "./List";
import { uid } from "uid";

function App() {
  const [contact, setContact] = useState([]);
  const [isUpdate, setIsUpdate] = useState({
    id:null,
    status: false
  })

  const [formData, setFormData] = useState({
    name: "",
    telp: "",
  });

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let data = [...contact];

    //Jika form kosong maka tidak bisa menambah data
    if ((formData.name && formData.telp) === "") {
      return false;
    }
    if (isUpdate.status) {
      data.forEach((contact) => {
        if (contact.id === isUpdate.id) {
          contact.name = formData.name
          contact.telp = formData.telp
        }
      })
    }else{
      data.push({ id: uid(), name: formData.name, telp: formData.telp });
    }
    //Menambahkan contact

    setIsUpdate({id:null, status:false})
    setContact(data);
    setFormData({ name: "", telp: "" });

  }

  function handleDel(id) {
    let data = [...contact]
    let filterData = data.filter(contact => contact.id !== id)
    setContact(filterData)
  }

  function handleEdit(id) {
    let data = [...contact]
    let foundData = data.find(contact => contact.id === id)

    setFormData({name: foundData.name, telp: foundData.telp})
    setIsUpdate({id:id, status:true})
  }

  return (
    <div className="App">
      <h1 className="px-3 py-3">My Contact List</h1>

      <form className="px-3 py-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            value={formData.name}
            name="name"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">No. Telp</label>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            value={formData.telp}
            name="telp"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Save
          </button>
        </div>
      </form>
      <List data={contact} handleEdit={handleEdit} handleDel={handleDel}/>
    </div>
  );
}

export default App;
