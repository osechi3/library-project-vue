export const mixinHelperFunctions = {
  methods: {
    checkObjectEquality (obj1, obj2) {
      if (this.checkObjectEqualityLength(obj1, obj2) === false) return false

      const obj1Values = Object.values(obj1).map(value => value.toString())
      const obj1ValuesSorted = obj1Values.sort()
      const obj2Values = Object.values(obj2).map(value => value.toString())
      const obj2ValuesSorted = obj2Values.sort()

      for (let index = 0; index < obj2ValuesSorted.length; index++) {
        if (obj1ValuesSorted[index] !== obj2ValuesSorted[index]) return false
      }
      return true
    },

    checkObjectEqualityLength (obj1, obj2) {
      const obj1Keys = Object.keys(obj1)
      const obj2Keys = Object.keys(obj2)
      if (obj1Keys.length !== obj2Keys.length) return false
    }
  }
}
