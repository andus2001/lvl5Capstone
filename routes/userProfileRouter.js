const express = require('express')
const userProfileRouter = express.Router()
const UserProfile = require('../models/userProfile.js')

//get all

userProfileRouter.get('/', (req, res, next) =>{
    UserProfile.find((err, userProfile) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userProfile)
    })
})

//get by id
userProfileRouter.get('/:userId', (req, res, next) =>{
    UserProfile.findById({ _id: req.params.userId}, (err, foundUser) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(foundUser)
    })
})

//post
userProfileRouter.post('/', (req, res, next) => {
    const newUser = new UserProfile(req.body)
    newUser.save((err, savedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedUser)
    })
})

//delete
userProfileRouter.delete('/:userId', (req, res, next) => {
    UserProfile.findOneAndDelete({ _id: req.params.userId }, (err, deletedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted ${deletedUser.firstName} from the database`)
    })
})

//update one
userProfileRouter.put('/:userId', (req, res, next) =>{
    UserProfile.findOneAndUpdate({_id: req.params.userId}, 
        req.body, {new: true}, (err, updatedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedUser)
        })
})

module.exports = userProfileRouter