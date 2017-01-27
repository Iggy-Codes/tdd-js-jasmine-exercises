describe('function "balancedNesting" that', function () { // eslint-disable-line no-undef
  it('should exist', function () { // eslint-disable-line no-undef
    expect(balancedNesting).toBeDefined() // eslint-disable-line no-undef
  })
  it('should return a boolean', function () { // eslint-disable-line no-undef
    expect(typeof balancedNesting()).toEqual('boolean') // eslint-disable-line no-undef
  })
  it('should receive one string as parameter', function () { // eslint-disable-line no-undef
    expect(balancedNesting()).toEqual(false) // eslint-disable-line no-undef
  })
  // it('function should receive a string', function () {
  //   expect(balancedNesting(5)).toEqual('Error2')
  // })
  describe('checks a string received as a parameter and should return ', function () { // eslint-disable-line no-undef
    describe('FALSE when', function () { // eslint-disable-line no-undef
      it('there\'s any character different than parentheses () brackets [] or braces {}', function () { // eslint-disable-line no-undef
        expect(balancedNesting('9')).toEqual(false) // eslint-disable-line no-undef
      })
      it('there\'s a different number of open brackets [ than a number of close brakets ]', function () { // eslint-disable-line no-undef
        expect(balancedNesting('[')).toEqual(false) // eslint-disable-line no-undef
      })
      it('there\'s a different number of open braces { than a number of close braces }', function () { // eslint-disable-line no-undef
        expect(balancedNesting('[({{}}{{})]')).toEqual(false) // eslint-disable-line no-undef
      })
      it('there\'s a different number of open parentheses ( than a number of close parentheses )', function () { // eslint-disable-line no-undef
        expect(balancedNesting('[]{[]}[](')).toEqual(false) // eslint-disable-line no-undef
      })
      it('there\'s an open bracket ] before any close bracket [', function () { // eslint-disable-line no-undef
        expect(balancedNesting('{][}')).toEqual(false) // eslint-disable-line no-undef
      })
      it('there\'s an open braces } before any close braces {', function () { // eslint-disable-line no-undef
        expect(balancedNesting('()[]}{')).toEqual(false) // eslint-disable-line no-undef
      })
      it('there\'s an open parentheses ) before any close parentheses (', function () { // eslint-disable-line no-undef
        expect(balancedNesting(')[()](')).toEqual(false) // eslint-disable-line no-undef
      })
      it('there\'s one of more group of brakets [ ], and inside them there is a different number of open braces { and close braces }', function () { // eslint-disable-line no-undef
        expect(balancedNesting('[{]}')).toEqual(false) // eslint-disable-line no-undef
      })
      it('there\'s one of more group of brackets [ ], and inside them  there is a different number of open parentheses ( and  close parentheses )', function () { // eslint-disable-line no-undef
        expect(balancedNesting('[(])')).toEqual(false) // eslint-disable-line no-undef
      })
      it('there\'s one of more group of braces { }, and inside them there is a different number of open parentheses ( and  close parentheses )', function () { // eslint-disable-line no-undef
        expect(balancedNesting('{(})')).toEqual(false) // eslint-disable-line no-undef
      })
    })
    describe('TRUE  when', function () { // eslint-disable-line no-undef
      it('there\'s a balanced list, nested or not,  of parentheses (), brackets [] and braces {}', function () { // eslint-disable-line no-undef
        expect(balancedNesting('[{(())}][]')).toEqual(true) // eslint-disable-line no-undef
      })
    })
  })
})
