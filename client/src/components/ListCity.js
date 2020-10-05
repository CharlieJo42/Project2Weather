import React, { Fragment, useEffect, useState } from "react";

const ListCity = () => {

    const getCity = async() => {
        try {

        const response = await fetch("http://localhost:5000/city")
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getCity();
    });
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
      
    </tbody>
  </table></Fragment>
};

export default ListCity;

