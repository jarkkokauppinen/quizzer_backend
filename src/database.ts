import mongoose from 'mongoose'

declare const process : {
  env: {
    MONGO_DB: string
  }
}

export const connect = () => {
  mongoose.connect(process.env.MONGO_DB, (error: any) => {
    if (!error) {
      console.log('connected to database')
    } else {
      console.log(error)
    }
  })
}