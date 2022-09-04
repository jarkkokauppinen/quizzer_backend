import mongoose, { Schema } from 'mongoose'

const playerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
})

export const Player = mongoose.model('Player', playerSchema)