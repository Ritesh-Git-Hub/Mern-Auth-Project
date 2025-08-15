// // db.js
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       'mongodb+srv://mernUser:mernUser@cluster0.nipxf6y.mongodb.net/mernDB?retryWrites=true&w=majority&appName=Cluster0',
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       }
//     );
//     console.log('✅ MongoDB connected');
//   } catch (err) {
//     console.error('❌ Connection error:', err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://mernUser:mernUser@cluster0.nipxf6y.mongodb.net/mernAuthDB?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ Connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
