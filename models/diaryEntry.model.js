const mongoose = require("mongoose");

const diaryEntrySchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DiaryEntry = mongoose.model("DiaryEntry", diaryEntrySchema);

module.exports = DiaryEntry;
