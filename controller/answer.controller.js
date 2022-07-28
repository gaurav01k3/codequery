const answerModel = require("../models/answer.model");

const postAnswerController = async (req, res) => {
    const { body, question, createdBy } = req.body;

    if (!body || !question || !createdBy) {
        return res.status(422).json({ message: 'Details are missing' });
    }

    try {
        const answer = new answerModel({
            body,
            question,
            createdBy,
        })

        const result = await answer.save();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}


const addVoteAnswerController = async (req, res) => {

    const { voter_id, ans_id } = req.body;
    if (!voter_id || !ans_id)
        return res.status(422).json({ message: "Insufficient information send!!" });

    try {
        const answer = await answerModel.findByIdAndUpdate(ans_id,
            { $push: { voters: voter_id } }, { new: true });

        res.send(answer);
    } catch (error) {
        console.log(error);
    }
}

const removeVoteAnswerController = async (req, res) => {

    const { voter_id, ans_id } = req.body;
    if (!voter_id || !ans_id)
        return res.status(422).json({ message: "Insufficient information send!!" });

    try {
        const answer = await answerModel.findByIdAndUpdate(ans_id,
            { $pull: { voters: voter_id } }, { new: true });

        res.send(answer);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postAnswerController,
    addVoteAnswerController,
    removeVoteAnswerController
};