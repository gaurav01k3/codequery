const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: [
        {
            type: String,
            required: true
        }
    ],
    voters: [
        {
            type: String,
        }
    ],
    answers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Answer"
        }
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
    { timestamps: true }
)


const questionModel = mongoose.model('Question', questionSchema);


module.exports = questionModel;