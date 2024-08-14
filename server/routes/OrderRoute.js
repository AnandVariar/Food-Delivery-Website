import express from 'express'
import authMiddleware from '../middleware/Auth.js'
import { listOrder, placeOrder, updateStatus, usersOrder, verifyOrder } from '../controllers/OrderController.js'

const orderRouter = express.Router()

orderRouter.post('/place',authMiddleware,placeOrder)
orderRouter.post('/verify',verifyOrder)
orderRouter.post('/usersorders',authMiddleware,usersOrder)
orderRouter.get('/list',listOrder)
orderRouter.post('/status',updateStatus)


export default orderRouter