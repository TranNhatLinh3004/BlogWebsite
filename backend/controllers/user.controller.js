const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

// get user
const handleGetUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);

        const { password, ...other } = user._doc;
        res.status(200).json(other);
    } catch (error) {
        res.status(400).json("Wrong");
    }
};

// update
const handleUpdateUser = async(req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, {
                    $set: req.body,
                }, { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json("You can update your account");
    }
};

// delete user and post
const handleDeleteUser = async(req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);

            try {
                await Post.deleteMany({ username: user.username });

                await User.findByIdAndDelete(req.params.id);

                res.status(200).json(" User has been deleted...");
            } catch (error) {
                res.status(404).json("User not found");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json("You can delete only your account");
    }
};

module.exports = { handleUpdateUser, handleDeleteUser, handleGetUser };