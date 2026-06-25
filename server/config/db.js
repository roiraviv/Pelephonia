import mongoose from 'mongoose'

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

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    // #region agent log
    debugLog('server/config/db.js:connect', 'MONGODB_URI missing — skipping DB', {}, 'C')
    // #endregion
    console.warn('MONGODB_URI not set — database features disabled')
    return
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    // #region agent log
    debugLog('server/config/db.js:connect', 'MongoDB connected', { host: conn.connection.host }, 'C')
    // #endregion
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    // #region agent log
    debugLog('server/config/db.js:connect', 'MongoDB connection failed', { error: error.message }, 'C')
    // #endregion
    console.error(`MongoDB Error: ${error.message}`)
    console.warn('Continuing without database — set MONGODB_URI to enable API persistence')
  }
}

export default connectDB
