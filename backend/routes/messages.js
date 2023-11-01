const express = require("express");

const {
  getAllMessages,
  getSingleMessage,
  createMessage,
  deleteMessage,
  editMessage,
} = require("../controllers/messageController");

const router = express.Router();

router.get("/", getAllMessages);

router.get("/:id", getSingleMessage);

router.post("/", createMessage);

router.delete("/:id", deleteMessage);

router.patch("/:id", editMessage);

module.exports = router;
