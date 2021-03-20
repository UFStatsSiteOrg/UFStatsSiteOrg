import express, {Request, Response} from 'express'

require('dotenv').config()
const app = express()

app.post('/submit', (req : Request, res : Response) => {
  
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`)
})