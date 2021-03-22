import express, {Request, Response} from 'express'
import { runScript } from './docker/controller'
import { inputTransform } from './transformers/transformers'
import { R } from './util/interfaces'

require('dotenv').config()
const app = express()

app.use(express.json());

app.post('/submit', async (req : Request, res : Response) => {
  const requestBody : R.Input = req.body;
  const data : R.Data = inputTransform(requestBody);
  console.log(data);
  const output : string = await runScript(data);
  res.send(output);
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`)
})