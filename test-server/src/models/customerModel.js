const Mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');

const Schema = Mongoose.Schema;


const CustomerSchema = new Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  lastcontact: { type: Date, default: Date.now },
  lifetime: { type: String, required: true },
  isdeleted: { type: Boolean, default: false },
});

CustomerSchema.plugin(AutoIncrement, { inc_field: 'id' });
const Customers = Mongoose.model('users', CustomerSchema);
module.exports = Customers;
