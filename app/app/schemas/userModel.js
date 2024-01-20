const mongoose = require('mongoose');
const Post = require('../schemas/postModel.js')

const userSchema = new mongoose.schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    scores: {
        type: [Number],
        default: [0, 0, 0, 0, 0, 0, 0]
    },
    headPost: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    }
});

function generateId() {
    return Math.floor(100000000 + Math.random() * 900000000).toString();
}

userSchema.pre('save', async function(next) {
    if (!this.id)
    {
        let unique = false;
        while(!unique) {
            const id = generateId();
            const existingUser = await mongoose.models.Users.findOne({customId: id });
            if(!existingUser) {
                this.id = id;
                unique = true;
            }
        }
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;