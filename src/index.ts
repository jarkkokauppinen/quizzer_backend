import express from 'express'
import cors from 'cors'
import { connect } from './database'
import { Player } from './schema'
import { PlayerType } from '../types'

require('dotenv').config()

const app = express()

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

connect()

app.get('/highscores', async (_req, res) => {
  const players : PlayerType[] = await Player.find().sort({ score: -1 }).limit(10)
  res.send(players)
})

app.post('/highscores', async (req, _res) => {
  const body = req.body

  const highscore = new Player({
    name: body.name,
    score: body.score
  })

  try {
    await highscore.save()
  } catch (error) {
    console.log(error)
  }
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})