const express = require('express')
const credentials = require('../models/credentials.js')
const credentialsRouter = express.Router()
const Credentials = require('../models/credentials.js')

//get all
credentialsRouter.get('/', (req, res, next) => {
    Credentials.find((err, credentials) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(credentials)
    })
})

//get one by id
credentialsRouter.get('/:credentialsId', (req, res, next) =>{
    Credentials.findById({ _id: req.params.credentialsId}, (err, foundCredentials) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(foundCredentials)
    })
})

//post
credentialsRouter.post('/', (req, res, next) => {
    const newCredentials = new Credentials(req.body)
    newCredentials.save((err, savedCredentials) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedCredentials)
    })
})

//delete
credentialsRouter.delete('/:credentialsId', (req, res, next) => {
    Credentials.findOneAndDelete({ _id: req.params.credentialsId }, (err, deletedCredentials) =>{
     if(err){
         res.status(500)
         return next(err)
     }   
     return res.status(200).send(`Successfully deleted ${deletedCredentials.subscription} information from the Database`)
    })
})

//update one
credentialsRouter.put('/:credentialsId', (req, res, next) => {
    Credentials.findOneAndUpdate({_id: req.params.credentialsId},
        req.body, {new: true}, (err, updatedCredentials) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedCredentials)
        })
})

module.exports = credentialsRouter