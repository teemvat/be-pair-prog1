

// {
//     "sender": "John Smith",
//     "message": "Great session on React components! I found the examples very helpful.",
//     "rating": 5
//   }

let feedbackArray = [];

let nextId = 1;


const getAll = () => {
    return feedbackArray;
}

const createFeedback = (sender, message, rating) => {
    if (!sender || !message || !rating) {
        return false;
    } 

    const newFeedback = {
        id: nextId++,
        sender,
        message,
        rating,
    };

    feedbackArray.push(newFeedback);
    return newFeedback;
}

const getFeedbackById = (id) => {
    const feedback = feedbackArray.find((item) => item.id == id);
    if (feedback) {
        return feedback;
    } else {
        return false;
    }
}

const updateFeedback = (id, updatedData) => {
    const feedback = getFeedbackById(id);
    if (feedback) {
        if (updatedData.sender) {
            feedback.sender = updatedData.sender;
        }
        if (updatedData.message) {
            feedback.message = updatedData.message;
        }
        if (updatedData.rating) {
            feedback.rating = updatedData.rating;
        }
        return feedback;
    }
    return false;
}

const deleteFeedback = (id) => {
    const feedback = getFeedbackById(id);
    if (feedback) {
        const initialLength = feedbackArray.length;
        feedbackArray = feedbackArray.filter((feedback) => feedback.id != id);
        return feedbackArray.length < initialLength;
    }
    return false;
}



if (require.main === module) {
    let result = addOne("John Smith", '"message": "Great session on React components! I found the examples very helpful."', 4);
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("new feedback called:", createFeedback("Pertti", "On hyvä!", 5))
    console.log("findById called:", getFeedbackById(1));
    console.log("updatefeedback called:", updateFeedback(1, {message: "Ei ollut hyvä", rating: 1}))
    console.log("delete called:", deleteFeedback(1))
}

Feedback = {getAll, createFeedback, getFeedbackById, updateFeedback, deleteFeedback};

module.exports = Feedback;