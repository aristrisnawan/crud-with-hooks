import React from "react";

export default function List({ data, handleEdit, handleDel }) {
  return (
    <div className="list-group">
      {data.map((isi) => {
        return (
          <div className="list-group-item list-group-item-action" key={isi.id}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{isi.name}</h5>
              <div>
                <button onClick={() => handleEdit(isi.id)} className="btn btn-sm btn-link">Edit</button>
                <button onClick={() => handleDel(isi.id)} className="btn btn-sm btn-link">Del</button>
              </div>
            </div>
            <p className="mb-1">{isi.telp}</p>
          </div>
        );
      })}
    </div>
  );
}
