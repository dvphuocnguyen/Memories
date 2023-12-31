import express from 'express'
import {getFeedPosts, getUserPosts, likePost} from "../controllers/posts.js"
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

//read
router.get("/", verifyToken, getFeedPosts, getUserPosts)
router.get("/:userId/posts", verifyToken, getFeedPosts, getUserPosts)

//update

router.patch("/:id/like", verifyToken, likePost)

export default router;