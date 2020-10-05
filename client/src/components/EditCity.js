import React, { Fragment, useState } from "react";

const EditCity = ({ city }) => {
    const [description, setDescription] = useState(city.description);
    
    
    const updateDescription = async(e) => {
      e.preventDefault();
        try {
            const body = { description };
            const response = await fetch (`http://localhost:5000/city/${city.city_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }
    
    return <Fragment>
        <button type="button" class="btn btn-warning" 
        data-toggle="modal" data-target={`#id${city.city_id}`}>
    Edit
  </button>
  
  
  <div class="modal" id={`id${city.city_id}`} onClick={() => setDescription(city.description)}>
    <div class="modal-dialog">
      <div class="modal-content">
  
       
        <div class="modal-header">
          <h4 class="modal-title">Edit City</h4>
          <button type="button" class="close" data-dismiss="modal" onClick={() => setDescription(city.description)}>&times;</button>
        </div>
  
       
        <div class="modal-body">
          <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
  
       
        <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-dismiss="modal" onClick = {e => updateDescription(e)}>Edit</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(city.description)}>Close</button>
        </div>
  
      </div>
    </div>
  </div></Fragment>
};

export default EditCity; 