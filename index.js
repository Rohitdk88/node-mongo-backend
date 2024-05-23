const express = require('express');
const mongoose = require('mongoose');
const Question = require('./models/question_new.model.js');
const questionRoute = require("./routes/question.route.js");
const app = express();

//midddleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.listen(3000, () => {
//     console.log("Server started");
// });

//routes
app.use("/api/questions", questionRoute);

app.get('/', (req, res) => {
    res.send("Response from GET API");
});

// app.get('/api/questions', async (req, res) => {
//     try {
//         const questions  = await Question.find({});
//         res.status(200).json(questions);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.get('/api/questions/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const question = await Question.findById(id);
//         res.status(200).json(question);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.post('/api/questions', async (req, res) => {
//     try {
//         const question = await Question.create(req.body);
//         res.status(200).json(question);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.put('/api/questions/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const question = await Question.findByIdAndUpdate(id, req.body);

//         if(!question) {
//             return res.status(404).json({message: 'Question not found'});
//         }

//         const updatedQuestion = await Question.findById(id);
//         res.status(200).json(updatedQuestion);

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.delete('/api/questions/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const question = await Question.findByIdAndDelete(id);

//         if(!question) {
//             return res.status(404).json({message: 'Question not found'});
//         }

//         res.status(200).json({message: 'Question deleted successfully'});

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

mongoose.connect("mongodb+srv://rohitdk88:JAGY2WCdfmGUobng@backenddb.xoskvma.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log("Server started");
    });
})
.catch(() => {
    console.log("Couldn't connect to MongoDB");
});