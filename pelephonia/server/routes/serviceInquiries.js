import { Router } from 'express'
import ServiceInquiry from '../models/ServiceInquiry.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const inquiries = await ServiceInquiry.find().sort({ createdAt: -1 })
    res.json(inquiries)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const inquiry = await ServiceInquiry.create(req.body)
    res.status(201).json(inquiry)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.patch('/:id/status', async (req, res) => {
  try {
    const inquiry = await ServiceInquiry.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true },
    )
    if (!inquiry) {
      return res.status(404).json({ message: 'קריאת שירות לא נמצאה' })
    }
    res.json(inquiry)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router
