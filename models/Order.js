const {faker} = require("@faker-js/faker")
const moment = require("moment")

class Order {
  constructor(id, itemType, orderState, lastUpdateTime, branch, customer, qty) {
    this.id = id
    this.itemType = itemType
    this.orderState = orderState
    this.lastUpdateTime = lastUpdateTime
    this.branch = branch
    this.customer = customer
    this.qty = qty
  }

  static generateDummyOrder(id) {
    const randomDaysAgo = faker.number.int({min: 0, max: 30})
    const recentDate = moment().subtract(randomDaysAgo, "days")

    // If the date is today, set the time to a random value within the day
    if (randomDaysAgo === 0) {
      const randomTimeWithinDay = moment()
        .startOf("day")
        .add(faker.number.int({min: 0, max: 86399}), "seconds")
      recentDate.set({
        hour: randomTimeWithinDay.hour(),
        minute: randomTimeWithinDay.minute(),
        second: randomTimeWithinDay.second(),
        millisecond: randomTimeWithinDay.millisecond(),
      })
    } else {
      // If the date is not today, set the time to a completely random value
      recentDate.set({
        hour: faker.number.int({min: 0, max: 23}),
        minute: faker.number.int({min: 0, max: 59}),
        second: faker.number.int({min: 0, max: 59}),
        millisecond: 0,
      })
    }

    return new Order(
      id,
      faker.helpers.arrayElement(["Cake", "Cookies", "Muffins"]),
      faker.helpers.arrayElement([
        "Created",
        "Shipped",
        "Delivered",
        "Cancelled",
      ]),
      recentDate.format("YYYY-MM-DD HH:mm:ss"),
      faker.number.int({min: 1, max: 1000}),
      faker.string.uuid(),
      faker.number.int({min: 1, max: 10})
    )
  }
}

module.exports = Order
