import express, {Request, Response} from 'express'
const app = express()
const port = 3005

app.get('/', (req: Request, res: Response) => {
  let helloMessage = "Privet Serhii ts -w123 package req"
  res.send(helloMessage)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})