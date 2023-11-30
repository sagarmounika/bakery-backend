const express = require("express")
const bodyParser = require("body-parser")
const ordersRouter = require("./api/orders") // Import the router from the orders module
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3030

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Welcome to Star Bakery!")
})

// Use the orders router for the "/api/orders" endpoint
app.use("/api/orders", ordersRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
