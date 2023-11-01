const Message = require("../models/MessageModels");
const mongoose = require("mongoose");

// get all meessages
const getAllMessages = async (req, res) => {
  const allMessages = await Message.find({}).sort({ createdAt: -1 });

  res.status(200).json(allMessages);
};

const getSingleMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such message" });
  }

  const message = await Message.findById(id);

  if (!message) {
    return res.status(404).json({ error: "no such message" });
  }

  res.status(200).json(message);
};

const createMessage = async (req, res) => {
  const { user, text } = req.body;

  let emptyFields = [];

  if (!user) {
    emptyFields.push("user");
  }
  if (!text) {
    emptyFields.push("text");
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({
      error: "pls fill all the fields pls",
      emptyFields,
    });
  }

  try {
    const newMessage = await Message.create({
      user,
      text,
    });
    res.status(200).json(newMessage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such message" });
  }

  const message = await Message.findOneAndDelete({ _id: id });

  if (!message) {
    return res.status(404).json({ error: "no such message" });
  }

  res.status(200).json(message);
};

const editMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such message" });
  }

  const message = await Message.findOneAndUpdate(
    {
      _id: id,
    },
    {
      ...req.body,
    }
  );

  if (!message) {
    return res.status(404).json({ error: "no such message" });
  }

  res.status(200).json(message);
};

module.exports = {
  getAllMessages,
  getSingleMessage,
  createMessage,
  deleteMessage,
  editMessage,
};
