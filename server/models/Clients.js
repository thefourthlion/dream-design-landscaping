const mongoose = require("mongoose");
const ClientsSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please provide name"] },
    phone: { type: String, required: [true, "Please provide phone"] },
    email: { type: String, required: [true, "Please provide email"] },
    address: { type: String, required: [true, "Please provide address"] },
    description: {
      type: String,
      required: [true, "Please provide description"],
    },
    timestamp: { type: String, required: [true, "Please provide timestamp"] },
  },
  { timestamps: true }
);
const Clients = mongoose.model("Clients", ClientsSchema);
module.exports = Clients;
