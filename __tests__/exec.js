const exec = require('child_process').exec

describe('exec', () => {

  beforeEach(() => {
    console.log('beforeEach')
  })

  afterEach(() => {
    console.log('afterEach')
  })

  it('should exec', (done) => {
    exec('ls', (err, stdout, stderr) => {
      expect(err).toEqual('asdfjkasdf;j')
      done()
    })
  })
})
