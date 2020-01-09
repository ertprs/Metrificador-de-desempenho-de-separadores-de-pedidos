const bcrypt = require('bcrypt');
const saltRounds = 10;
const sequelize = require('sequelize');
const Op = sequelize.Op
const authuser = require('../model/authuser')
require('dotenv').config();

var jwt = require('jsonwebtoken');

module.exports = {

    async login(req, res) {

        authuser.findOne({
            where: {
                email: req.body.email
                   }
       }).then(function (user) {
           if (!user) {

            console.log("usuario não existe  / ")
              res.redirect('/');
           } else {
  bcrypt.compare(req.body.password, user.password, function (err, result) {
          if (result == true) {

            const id = user.id;
            const name = user.name;
            var token = jwt.sign({ id }, process.env.SECRET, {
              expiresIn: '1d' 
            });
            res.status(200).send({ name: name, auth: true, token: token });

     
          } else {
           
            console.log("senha errada")
            //res.send('Incorrect password');
           res.redirect('/');
          }
        });
       }
    });
        

    },

    async register(req, res) {

      //const dados = await authuser.create(req.body);
      //return res.json(dados);
        bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
            
            authuser.create({
              name: req.body.name,
              email: req.body.email,
              password: hash
              }).then(function(data) {
               if (data) {
               res.redirect('/home');
               }
             });
            }); 


    },

    async logout (req,res){
        console.log("aqui")
        res.status(200).send({ auth: false, token: null });
    }

}