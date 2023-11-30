const express = require("express")
const bodyParser = require("body-parser")
const ordersRouter = require("./api/orders") // Import the router from the orders module
const cors = require("cors")
const generateDummyData = require("./utils/generateDummyData.js")
const app = express()
const PORT = process.env.PORT || 3030
const orders = generateDummyData(100000)

// Sorting orders by lastUpdateTime in ascending order
const sortedOrders = [...orders].sort(
  (a, b) => new Date(a.lastUpdateTime) - new Date(b.lastUpdateTime)
)
app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send(sortedOrdersyy)
})

// Use the orders router for the "/api/orders" endpoint
app.use("/api/orders", ordersRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
