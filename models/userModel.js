const mongoose = require('mongoose')
const {v4: uuidv4} = require('uuid')

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
  scores: {
    type: [Number],
    default: [0, 0, 0, 0, 0, 0, 0],
  },
  headPost: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
})
/*
function generateId() {
    return Math.floor(100000000 + Math.random() * 900000000).toString();
}

userSchema.pre('save', async function(next) {
    if (!this.id) {
        const maxAttempts = 10;
        let attempt = 0;
        while (attempt < maxAttempts) {
            const id = generateId();
            const existingUser = await mongoose.models.User.findOne({ id: id });
            if (!existingUser) {
                this.id = id;
                break;
            }
            attempt++;
        }

        if (attempt === maxAttempts) {
            return next(new Error('Failed to generate a unique ID'));
        }
    }
    next();
});*/

const User = mongoose.model('User', userSchema)

module.exports = User
