import { ObjectId } from 'mongoose'

export interface PlayerType {
  _id: ObjectId
  name: string
  score: number
  __v: number
}