const User = require('../models/User');

module.exports = {
    async create(req, res){
        console.log(req.body);

        const user = {
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            linkedin: req.body.linkedin,
            city: req.body.city,
            state: req.body.state
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

    async read(req, res){

    },

    async update(req, res){

    },

    async delete(req, res){

    }
}