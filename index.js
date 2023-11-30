const express = require("express")
const bodyParser = require("body-parser")
const orders = require("./api/orders")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3030

app.use(cors())
app.use(bodyParser.json())





// app.get("/api/order/:orderid", (req, res) => {
//   const order = orders.find(o => o.id === parseInt(req.params.orderid))
//   if (!order) {
//     res.status(404).json({error: "Order not found"})
//   } else {
//     res.json(order)
//   }
// })

app.get("/api/orders", orders)
app.get("/", (req, res) => {
  res.send("Welcome to Star Bakery!")
})
// app.post("/api/order", (req, res) => {
//   const order = req.body
//   order.id = orders.length + 1
//   orders.push(order)
//   // Adding the new order to the sortedOrders array
//   sortedOrders.push(order)
//   // Sorting the array again after adding a new order
//   sortedOrders.sort(
//     (a, b) => new Date(a.lastUpdateTime) - new Date(b.lastUpdateTime)
//   )
//   res.json({orderId: order.id})
// })

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
