import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cookieParser from "cookie-parser"
import connectDB from "./config/db.js"
// routes
import userRoutes from "./routes/userRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import productRoutes from "./routes/productRoutes.js"
// error middlewares
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
// import { createServer } from "http"
// import { ApolloServer } from "@apollo/server"
// import { expressMiddleware } from "@apollo/server/express4"
// import { ApolloServerPluginInlineTrace } from "@apollo/server/plugin/inlineTrace"
// import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"
// import { makeExecutableSchema } from "@graphql-tools/schema"
// import { useServer } from "graphql-ws/lib/use/ws"
// import { protect } from "./middleware/authMiddleware.js"
// import { WebSocketServer } from "ws"
// import {typeDefs, resolvers} from './schemas'

connectDB()

const port = process.env.PORT || 5000

const app = express()

// parse data to json
app.use(express.json())
// parse form data
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// route usage
app.use("/api/users", userRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/products", productRoutes)

app.get("/", (req, res) => res.send("Server is ready"))

// error middlewares
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
