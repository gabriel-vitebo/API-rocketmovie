const { Router } = require("express")

const usersRoutes = require("./users.routes")
const movieNotesRoutes = require("./movieNotes.routes")
const tagsRouter = require("./tags.routes")
const sessionsRoutes = require("./sessions.routes")

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/movienotes", movieNotesRoutes)
routes.use("/tags", tagsRouter)

module.exports = routes
