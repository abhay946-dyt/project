// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://gofood:Pass@cluster0.f2mgbnt.mongodb.net/gofoodmern?retryWrites=true&w=majority';

// const connectToMongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log('Connected to MongoDB');
//         const fetched_data = await mongoose.connection.db.collection('food_items');
//         fetched_data.find({}).toArray(function (err, data) {
//             if (err) console.log(err);
//             else console.log(data);
//         })
//     } 
//     catch (error) {
//         console.error('Error connecting to MongoD', error);
//     }
// };

// module.exports = connectToMongoDB;

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:Pass@cluster0.f2mgbnt.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        
        const foodItemsCollection = mongoose.connection.db.collection('food_items');
        const data = await foodItemsCollection.find({}).toArray();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongoDB;
