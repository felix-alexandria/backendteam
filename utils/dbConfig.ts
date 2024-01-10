import { Mongoose, connect } from "mongoose";
import {config} from "dotenv"

config()
const URL: string = process.env.DATABASE_URL!

export const dbConfig = async () => {
    try {
        return connect(URL).then(() => {
            console.log("Database connected! ....")
        })
    } catch (error) {
        return (error)
    }
}