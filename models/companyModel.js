const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 32 },
  password: { type: String, required: true, minLength: 8 },
  industry: { type: String, required: true },
});

module.exports = mongoose.model("Company", CompanySchema);
