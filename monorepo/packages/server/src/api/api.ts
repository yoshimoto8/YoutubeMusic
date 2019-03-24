import * as express from 'express'
// import { CounterResult } from 'music-api-schema'
const app = express()
// const result = new CounterResult()
app.get('/', (req, res) => {
  res.send('' + '')
})

export function test() {
  console.log('hello')
}
export default app
