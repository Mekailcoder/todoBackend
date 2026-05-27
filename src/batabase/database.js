const mongoose = require(`mongoose`);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`connect database`);
  } catch (error) {
    console.log(`error form database ${error}`);
  }
};

module.exports = connectDB;
