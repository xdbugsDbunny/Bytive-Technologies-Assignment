import mongoose from "mongoose";
import User from "../Model/userSchema.js";
import mongodb from 'mongodb'

export const getUsers = async(req,res) =>{
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const getUserById = async(req,res) =>{
    try {
        const id = req.params.id
        const user = await User.findOne({id:id})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const updateUser = async(req,res) =>{
    try {
        const id = req.params.id
        const name=req.body.name
        const email=req.body.email
        const phone=req.body.phone
        const website=req.body.website
        const result = await User.updateOne({id:id},
        {
            $set : {
                name: name,
                email: email,
                phone: phone,
                website:website
            }
        })
        console.log("Done")
        console.log(id,name)
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteUser = async(req,res) =>{
    try {
        const id = req.params.id
        let result = await User.deleteOne({id:id})
        console.log(id)
        console.log("Deleted")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}