import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: Number,
    username: String,
    name: String,
    email: String,
    phone: String,
    website: String,
    address:{
        street: String,
        suite: String,
        city: String,
        zipcode: Number,
        geo:{
            lat: Number,
            lng: Number
        }
    },
    company:{
        name: String,
        catchPhrase: String,
        bs: String
    }
});

const User = mongoose.model('users',userSchema)

export default User;