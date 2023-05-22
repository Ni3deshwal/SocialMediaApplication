import express from 'express';
import { deleteUser, followUser, getUser, getalluser, unfollowUser, updateUser } from '../controllers/user.controller.js';
import { authmiddleware } from '../middleware/auth.middleware.js';

const router=express.Router();
router.get('/',getalluser)
router.get('/:id',getUser)
router.put('/:id',authmiddleware,updateUser)
router.delete('/:id',authmiddleware,deleteUser)
router.put('/:id/follow',authmiddleware,followUser);
router.put('/:id/unfollow',authmiddleware,unfollowUser);

export default router