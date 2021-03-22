import express, {Request, Response} from 'express'
import RContainer from './docker/RContainer'

require('dotenv').config()
const app = express()

app.post('/submit', (req : Request, res : Response) => {
  
})

app.listen(process.env.PORT, () => {
  // new RContainer("test_plot").runRoutine();
  console.log(`Server listening at http://localhost:${process.env.PORT}`)
})