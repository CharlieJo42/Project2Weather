const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send("My first express web page!!!!")

})

// app.get("/about" (req, res) => {
//     res.send("My business is so cool!!!!")
// })

app.listen(3000, () => {
    console.log("The server is now running on Port 3000")
})