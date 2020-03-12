const User = require('../models/User');

module.exports = {
    async create(req, res){
        const user = {
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            linkedin: req.body.linkedin,
            city: req.body.city,
            state: req.body.state,
            shift: req.body.shift,
            abilities: req.body.abilities
        }

        User.create(user, (err, user)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(user);
            }
        });
    },

    async index(req, res){
        users = await User.find({});
        res.json(users);
    },

    async show(req, res){
        User.findById(req.params.id, (err, user)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(user);
            }
        });
    },

    async update(req, res){
        User.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false }, (err, user)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(user);
            }
        });
    },

    async destroy(req, res){
        User.findByIdAndDelete(req.params.id, { useFindAndModify: false }, (err)=>{
            if(err){
                res.json(err);
            }
            else{
                res.end();
            }
        });
    }
}