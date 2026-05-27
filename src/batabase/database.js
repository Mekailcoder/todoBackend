const mongoose = require(`mongoose`);

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://0.0.0.0/todo`);
    console.log(`connect database`);
  } catch (error) {
    console.log(`error form database ${error}`);
  }
};

module.exports = connectDB;
