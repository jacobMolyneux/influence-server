const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfluencerSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 32 },
  last_name: { type: String, required: true, maxLength: 32 },
  birthday: { type: String, required: true },
  social_media_handles: {
    Facebook: { type: String },
    Instagram: { type: String },
    Snapchat: { type: String },
    Tik_Tok: { type: String },
  },
});

module.exports = mongoose.Schema("Influencer", InfluencerSchema);
