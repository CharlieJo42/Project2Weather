import React, { Fragment, useEffect, useState } from "react";

const ListCity = () => {

    const [city, setCity] = useState([]);

    const deleteCity = async (id) => {
        try {
        const deleteCity = await fetch(`http://localhost:5000/city/${id}`, {
            method: "DELETE"
        });

        setCity(city.filter(city => city.city_id !== id));
        }catch (err) {
            console.error(err.message)
        }
    }

    const getCity = async() => {
        try {

        const response = await fetch("http://localhost:5000/city")
        const jsonData = await response.json();

        setCity(jsonData);
    } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getCity();
    }, []);
    return <Fragment><table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>City Name</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>*/}
      {city.map(city => (
          <tr key={city.city_id}>
              <td>{city.description}</td>
              <td>Edit</td>
              <td><button className="btn btn-danger" onCLick={() => deleteCity(city.city_id)}>Delete</button></td>
          </tr>
      ))}
    </tbody>
  </table></Fragment>
};

export default ListCity;

