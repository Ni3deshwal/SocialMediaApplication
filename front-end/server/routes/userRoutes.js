import express from 'express';
import { deleteUser, followUser, getUser, getalluser, unfollowUser, updateUser } from '../controllers/user.controller.js';

const router=express.Router();
router.get('/',getalluser)
router.get('/:id',getUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
router.put('/:id/follow',followUser);
router.put('/:id/unfollow',unfollowUser);

export default router