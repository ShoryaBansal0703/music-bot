const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Bot is Online")
})

function keepAlive() {
  server.listen( () => {
    console.log("Webserver is working!")
  })
}

module.exports = keepAlive