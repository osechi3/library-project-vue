export const mixinHelperFunctions = {
  methods: {
    checkObjectEquality (obj1, obj2) {
      if (this.checkObjectEqualityLength(obj1, obj2) === false) return false

      const obj1Values = Object.values(obj1)
      const obj2Values = Object.values(obj2)

      let numberOfEqualValues = 0
      obj1Values.forEach(value => {
        if (obj2Values.find(value2 => value === value2)) numberOfEqualValues++
      })
      return (numberOfEqualValues === obj1Values.length)
    },

    checkObjectEqualityLength (obj1, obj2) {
      const obj1Keys = Object.keys(obj1)
      const obj2Keys = Object.keys(obj2)
      if (obj1Keys.length !== obj2Keys.length) return false
    }
  }
}
