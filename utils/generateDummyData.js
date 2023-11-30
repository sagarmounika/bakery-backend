// utils/generateDummyData.js

const Order = require("../models/Order.js")

function generateDummyData(count) {
  const dummyData = []
  for (let i = 1; i <= count; i++) {
    dummyData.push(Order.generateDummyOrder(i))
  }

  // Sort orders by date in ascending order
  dummyData.sort(
    (a, b) => new Date(a.lastUpdateTime) - new Date(b.lastUpdateTime)
  )

  return dummyData
}

module.exports = generateDummyData
