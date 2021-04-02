import express, {Request, Response} from 'express'
import { DockerController } from './docker/controller'
import { inputTransform } from './transformers/transformers'
import { R } from './util/interfaces'
import { validateBody } from './util/middleware'

require('dotenv').config()
const app = express()

app.use(express.json());

app.post('/submit', validateBody, async (req : Request, res : Response) => {
  const requestBody : R.Input = req.body;
  // Transform input data to appropriate shape and insert necessary R code for export
  const data : R.Data = inputTransform(requestBody);
  console.log(data);
  // Execute R script in Docker container
  const rResponse : R.Response = await DockerController.execute(data);
  return res.send(rResponse);
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`)
})