import * as express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('' + '')
})

export function test() {
  console.log('hello')
}
export default app
