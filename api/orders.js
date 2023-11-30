const express = require("express")
const router = express.Router()
const generateDummyData = require("../utils/generateDummyData.js")

const orders = generateDummyData(100000)
// Sorting orders by lastUpdateTime in ascending order
const sortedOrders = [...orders].sort(
  (a, b) => new Date(a.lastUpdateTime) - new Date(b.lastUpdateTime)
)
router.get("/", async (req, res) => {
  try {
    res.json(sortedOrders)
  } catch (error) {
    console.error(error)
    return res.status(500).send("Server error")
  }
})

module.exports = router
