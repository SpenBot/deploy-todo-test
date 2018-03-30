const mongoose = require('mongoose')


if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/review-deploy-todo");
}



const db = mongoose.connection

db.on('error', err => {
  console.log(`\n\tError - connection to db failed : ${err}\n`)
})

db.once('open', () => {
  console.log("\n\tConnection to database successful.\n")
})




mongoose.Promise = Promise;

module.exports = mongoose;
