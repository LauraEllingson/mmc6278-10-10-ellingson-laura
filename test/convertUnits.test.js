const { expect } = require('chai')
const {
  getPounds,
  getFeetAndInches
} = require('../util/convertUnits')

describe('unit conversion helpers', () => {
  describe('getPounds', () => {
    // Weight of Snorlax
    it('should convert 4600 hectograms to "1014 pounds"', () => {
      const result = getPounds(4600)
      expect (result).to.eq("1014 pounds")
    })
    // Weight of Gengar
    it('should convert 400 hectograms to "88 pounds"', () => {
      const result = getPounds ("400")
      expect (result).to.eq("88 pounds")
    })
    // Weight of Scyther
    it('should convert 560 hectograms to "123 pounds"', () => {
      const result = getPounds(560)
      expect (result).to.eq("123 pounds")
    })
  })
  describe('getFeetAndInches', () => {
    // Height of Gengar
    it('should convert 15 decimeters to "4 feet 11 inches"', ()=> {
      const result = getFeetAndInches(15)
      expect (result).to.eq("4 feet 11 inches")
    })
    
    // Height of Snorlax
    it('should convert 21 decimeters to "6 feet 10 inches"', ()=> {
      const result = getFeetAndInches(21)
      expect (result).to.eq("6 feet 10 inches")
    })
    // Height of Gyarados
    it('should convert 65 decimeters to "21 feet 3 inches"', ()=> {
      const result = getFeetAndInches(65)
      expect (result).to.eq("21 feet 3 inches")
    })
  })
})
