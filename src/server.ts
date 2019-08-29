import '@babel/polyfill'
import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'

// Set up the express app
const app = express()

// Enable CORS
app.use(cors())

// Log requests to the console.
app.use(logger('dev'))

// Parse incoming requests data
app.use(bodyParser.json())

// Setup an index route
app.get(
  '/',
  (req: Request, res: Response): Response =>
    res.status(200).send({
      message: 'Welcome to Mitchs authors haven API',
    }),
)

// Return 404 for nonexistent routes
app.use((req: Request, res: Response): Response => res.status(404).send({ message: 'Route not found' }))

// Set Port
const port = process.env.PORT || 4000

app.listen(port, (): void => console.log(`server listening at port ${port}`))

export default app
