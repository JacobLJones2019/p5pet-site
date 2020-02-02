const AvatarModel = require('../models/AvatarModel');


//let getUserAvatar = AvatarModel.findOne('name')

module.exports = {

    read: (req, res) => {
       let loadedAvatars = AvatarModel.find(req.body)
            .then(result => {
                res.json({success:true, result: result})
            })
    },
    
    create: (req, res) => {
        let userAvatar = new AvatarModel ({
            name: req.body.name,
            stats:{
                level:req.body.level
            }
        });

        userAvatar.save()
            .then(result => {
                res.json({success: true, result: result});
            })
            .catch(err => {
                res.json({success: false, result: err});
            });
        },

    update:(req, res) => {
        AvatarModel.updateOne({_id: req.body._id}, req.body)
            .then(avatar => {
                if(!avatar) res.json({success: false, result: "Avatar does not exist!"});

                res.json(avatar);
            })
            .catch(err => {
                res.json({success:false, result:err});
            })
    }

};