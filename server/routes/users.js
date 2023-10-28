import express, { Router } from 'express'
import {
    getUser,
    getUserFriends,
    addRemoveFriend
} from "../controller/users"
import { verifyToken } from '../middleware/auth'

const router = express.Router();

//read
router.get("/:id", verifyToken, getUser)
router.get("/:id/friends", verifyToken, getUserFriends)

//update
router.pachch("/:id/:friendID", verifyToken, addRemoveFriend)

export default router