describe('function balancedNesting should to determine if the the parentheses (),the brackets [], and the braces {}, in a string are balanced', function () { // eslint-disable-line no-undef
  describe('function balancedNesting definition, input and ouptut', function () { // eslint-disable-line no-undef
    it('function should exist', function () { // eslint-disable-line no-undef
      expect(balancedNesting).toBeDefined() // eslint-disable-line no-undef
    })
    it('function should return a boolean', function () { // eslint-disable-line no-undef
      expect(typeof balancedNesting()).toEqual('boolean') // eslint-disable-line no-undef
    })
    it('function should receive one string as parameter', function () { // eslint-disable-line no-undef
      expect(balancedNesting()).toEqual(false) // eslint-disable-line no-undef
    })
  })
  // it('function should receive a string', function () {
  //   expect(balancedNesting(5)).toEqual('Error2')
  // })
  describe('function balancedNesting logical behaviour', function () { // eslint-disable-line no-undef
    it('function should return false when the string to check contains any character different than parentheses () brackets [] or braces {}', function () { // eslint-disable-line no-undef
      expect(balancedNesting('9')).toEqual(false) // eslint-disable-line no-undef
    })
    it('function should return false if there is a number different of open brackets [ than a number of close brakets ] in the string to check', function () { // eslint-disable-line no-undef
      expect(balancedNesting('[')).toEqual(false) // eslint-disable-line no-undef
    })
    it('function should return false if there is a number different of open braces { than a number of close braces } in the string to check', function () { // eslint-disable-line no-undef
      expect(balancedNesting('[({{}}{{})]')).toEqual(false) // eslint-disable-line no-undef
    })
    it('function should return false if there is a number different of open parentheses ( than a number of close parentheses ) in the string to check', function () { // eslint-disable-line no-undef
      expect(balancedNesting('[]{[]}[](')).toEqual(false) // eslint-disable-line no-undef
    })
    it('function should return false if an open bracket ] comes befores a close bracket [ in the string to check', function () { // eslint-disable-line no-undef
      expect(balancedNesting('{][}')).toEqual(false) // eslint-disable-line no-undef
    })
    it('function should return false if an open braces } comes befores a close braces { in the string to check', function () { // eslint-disable-line no-undef
      expect(balancedNesting('()[]}{')).toEqual(false) // eslint-disable-line no-undef
    })
    it('function should return false if an open parentheses ) comes befores a close parentheses ( in the string to check', function () { // eslint-disable-line no-undef
      expect(balancedNesting(')[()](')).toEqual(false) // eslint-disable-line no-undef
    })
    it('function should return false if inside brakets [ ] there is a different number of open braces { and close braces }', function () { // eslint-disable-line no-undef
      expect(balancedNesting('[{]}')).toEqual(false) // eslint-disable-line no-undef
    })
    it('function should return false if inside brackets [ ] there is a different number of open parentheses ( and  close parentheses )', function () { // eslint-disable-line no-undef
      expect(balancedNesting('[(])')).toEqual(false) // eslint-disable-line no-undef
    })
    it('function should return false if inside braces { } there is a different number of open parentheses ( and  close parentheses', function () { // eslint-disable-line no-undef
      expect(balancedNesting('{(})')).toEqual(false) // eslint-disable-line no-undef
    })
    it('function sould return true when receives a string to check with properly nested parentheses ()  braces {}  brackets []', function () { // eslint-disable-line no-undef
      expect(balancedNesting('[{(())}][]')).toEqual(true) // eslint-disable-line no-undef
    })
  })
})
