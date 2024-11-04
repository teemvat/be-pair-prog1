

const Feedback = require("./feedbackLib.js");

const getAllFeedbacks = (req, res) => {
    const feedbacks = Feedback.getAll();
    res.json(feedbacks);
};

const createFeedback = (req, res) => {
    const { sender, message, rating } = req.body;

    const newFeedback = Feedback.createFeedback(sender, message, rating);

    if (newFeedback) {
        res.json(newFeedback);
    } else {
        res.status(500).json({message: "Failed to give feedback"})
    }
};

const getFeedbackById = (req, res) => {
    const feedbackId = req.params.feedbackId;
    const feedback = Feedback.getFeedbackById(feedbackId);
    if (feedback) {
        res.json(feedback);
    } else {
        res.status(500).json({message: "Failed find feedback"})
    }
};

const updateFeedback = (req, res) => {
    const feedbackId = req.params.feedbackId;
    const { sender, message, rating } = req.body;

    const updatedFeedback = Feedback.updateFeedback(feedbackId, {sender, message, rating});

    if (updatedFeedback) {
        res.json(updatedFeedback);
    } else {
        res.status(500).json({message: "Failed find feedback"})
    }
};

const deleteFeedback = (req, res) => {
    const feedbackId = req.params.feedbackId;

    const isDeleted = Feedback.deleteFeedback(feedbackId);

    if (isDeleted) {
        res.json({message: "Feedback deleted successfully"});
    } else {
        res.status(500).json({message: "Failed find feedback"})
    }
};

module.exports = {
    getAllFeedbacks,
    getFeedbackById,
    createFeedback,
    updateFeedback,
    deleteFeedback,
};