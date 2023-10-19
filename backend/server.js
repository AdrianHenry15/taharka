import dotenv from "dotenv"
dotenv.config()

// Server Dependencies
import express from "express"
import cookieParser from "cookie-parser"
import connectDB from "./config/db.js"
import cors from 'cors'
import path, { dirname } from 'path'
import { fileURLToPath } from "url"
// routes
import userRoutes from "./routes/userRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import rewardsRoutes from "./routes/rewardsRoutes.js"
// import imageRoutes from "./routes/imageRoutes.js"
// error middlewares
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

connectDB()

const port = process.env.PORT || 5000

const app = express()

// parse data to json
app.use(express.json())
// parse form data
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// allow requests from any origin
// CROSS ORIGIN RESOURCE SHARING
app.use(cors());

// Serve static files from the 'public' directory
const __fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileName)
app.use(express.static(path.join(__dirname, 'public')));

// route usage
app.use("/api/users", userRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/products", productRoutes)
app.use("/api/rewards", rewardsRoutes)
// app.use("/api/images", imageRoutes)


app.get("/", (req, res) => res.send("Server is ready"))

// error middlewares
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
