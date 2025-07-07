import mongoose from 'mongoose';
const DB_URI =
  'mongodb+srv://evettakh:fTB5kDBnLxFMe83j@cluster0.qusd5mx.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0';

async function initMongoConnection() {
  await mongoose.connect(DB_URI);
  console.log('Mongo connection successfully established!');
}
export { initMongoConnection };
