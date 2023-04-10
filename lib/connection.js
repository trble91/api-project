import mongoose from mongoose; 

mongoose.Promise = Promise;

const mongoURI = "mongodb://127.0.0.1:27017/api-project";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log("We're connected!!")
  )
  .catch(err => console.log("Connection Failed.", err));

export default mongoose;