import express from "express"
import asyncHandler from "express-async-handler"
import User from "../../models/UserModel"
import { Request, Response } from "express"
import generateToken from "../../utils/generateToken"

// USER REGISTRATION
const registerUser = asyncHandler(async (req: Request, res: Response) => {})
