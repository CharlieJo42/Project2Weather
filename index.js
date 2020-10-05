const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


app.post("/city", (req, res) => {
    try {

     const { location } = req.body;
     const newCity = await pool.query("INSERT INTO city (location) VALUES($1) RETURNING *", [location])

    res.json(newCity.rows[0]); 
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/city", async(req, res) => {
    try {
const allCities - await pool.query("SELECT * FROM city");
    res.json(allCities.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.get("/city/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const city = await pool.query("SELECT * FROM city WHERE city_id = $1", [id])
        res.json(city.rows[0])
    } catch (err) {
        console.error(err.message);
    }
});


app.put("/city/:id", async (req, res) => {
    try {
        const { id } = rq.params;
        const { description } = req.body;
        const updateCity = await pool.query("UPDATE city SET location = $1 WHERE city_id = $2", [location, id]);

        res.json("City was updated!");
    } catch (err) {
        console.error(err.message)
    }
})


app.delete("city/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCity = await pool.query("DELETE FROM city WHERE city_id = $1", [id]);
        res.json("City was deleted!");
    } catch (err) {
        console.log(err.message)
    }
})





app.listen(5000, () => {
    console.log("server has started on port 5000");
});