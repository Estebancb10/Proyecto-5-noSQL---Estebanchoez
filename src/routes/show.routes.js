const express = require("express");
const showRouter = express.Router ();

const {
    getAllShows,
    getShowById,
    createShow,
    updateShow,
    deleteShow
} = require("../controlllers/show.controllers");

showRouter.get("/", getAllShows);
showRouter.get("/:id", getShowById);
showRouter.post("/", createShow);
showRouter.put("/:id", updateShow);
showRouter.delete("/:id", deleteShow);

module.exports = showRouter
