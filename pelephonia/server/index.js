import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import productRoutes from './routes/products.js'
import serviceInquiryRoutes from './routes/serviceInquiries.js'

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'PELEPHONIA API is running' })
})

app.use('/api/products', productRoutes)
app.use('/api/service-inquiries', serviceInquiryRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
