import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { existsSync } from 'fs'
import connectDB from './config/db.js'
import productRoutes from './routes/products.js'
import serviceInquiryRoutes from './routes/serviceInquiries.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.join(__dirname, '..', 'dist')

const app = express()
const PORT = process.env.PORT || 5000

// #region agent log
const debugLog = (location, message, data, hypothesisId) => {
  const payload = {
    sessionId: '6d24dd',
    location,
    message,
    data,
    hypothesisId,
    timestamp: Date.now(),
    runId: process.env.RENDER ? 'render' : 'local',
  }
  console.log('[debug]', JSON.stringify(payload))
  fetch('http://127.0.0.1:7588/ingest/41af4800-2098-429d-a934-156a675f0fe5', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '6d24dd' },
    body: JSON.stringify(payload),
  }).catch(() => {})
}
// #endregion

// #region agent log
debugLog('server/index.js:startup', 'Server bootstrap', {
  port: PORT,
  nodeEnv: process.env.NODE_ENV,
  distExists: existsSync(distPath),
  distPath,
  hasMongoUri: Boolean(process.env.MONGODB_URI),
}, 'A')
// #endregion

connectDB()

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'PELEPHONIA API is running' })
})

app.use('/api/products', productRoutes)
app.use('/api/service-inquiries', serviceInquiryRoutes)

if (existsSync(distPath)) {
  app.use(express.static(distPath))
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
  // #region agent log
  debugLog('server/index.js:static', 'Static dist serving enabled', { distPath }, 'D')
  // #endregion
} else {
  // #region agent log
  debugLog('server/index.js:static', 'dist folder missing — frontend not served', { distPath }, 'D')
  // #endregion
}

app.listen(PORT, () => {
  // #region agent log
  debugLog('server/index.js:listen', 'Server listening', { port: PORT }, 'B')
  // #endregion
  console.log(`Server running on port ${PORT}`)
})
