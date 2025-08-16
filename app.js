const express = require("express")
const path = require("path")
const app = express()
// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static("dist"))
app.get('/health', (req, res) => {
  res.send('ok')
})
// Serve React app for all non-API routes (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
