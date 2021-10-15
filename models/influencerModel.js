const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfluencerSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  accounts: {
    facebook: {
      default: null,
      username: { type: String, required: true },
      friends: { type: Number },
      avg_engagement: { type: String },
    },
    instagram: {
      default: null,
      username: { type: String, required: true },
      followers: { type: Number },
      following: { type: Number },
      avg_engagement: { type: String },
    },
    snapchat: {
      default: null,
      username: { type: string },
    },
    tik_tok: {
      default: null,
      username: { type: String, required: true },
      followers: { type: Number },
      following: { type: Number },
      avg_engagement: { type: String },
    },
    youtube: {
      default: null,
      username: { type: String, required: true },
      subscribers: { type: Number },
      avg_views: { type: Number },
    },
  },
});

module.exports = mongoose.model("Influencer", InfluencerSchema);
