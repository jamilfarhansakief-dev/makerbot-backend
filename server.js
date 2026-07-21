const express = require("express");
const cors = require("cors");
const knowledge = require("./faqData");

const app = express();
const PORT = 3000;

app.use(cors({
    origin: "*"
}));
app.use(express.json());




function findResponse(message) {
    message = message.toLowerCase().replace(/[^\w\s]/g, "");

    let bestMatch = null;
    let highestScore = 0;
    let secondBestScore = 0;

    knowledge.forEach(item => {
        let score = 0;

        item.keywords.forEach(keyword => {
            if (message.includes(keyword)) {
                if (keyword === "makerspace" || keyword === "maker space") {
                    score += 0.5;
                } else {
                    score += 2;
                }
            }
        });

        if (score > highestScore) {
            secondBestScore = highestScore;
            highestScore = score;
            bestMatch = item.response;
        }
    });


        if (bestMatch && highestScore > secondBestScore) {
            return bestMatch;
        }

    return "I did not understand your question. Are you sure it is related to Makerspace? If it is, please look through our FAQ page. If your question is still unanswered, please contact us at ecemakers@ust.hk and we will be happy to help!";
}

app.get("/", (req, res) => {
    res.send("MakerBot server is running!");
});

app.post("/chat", (req, res) => {
    const userMessage = req.body.message;

    const reply = findResponse(userMessage);

    res.json({
        reply: reply
    });
});


app.listen(PORT, () => {
    console.log(`MakerBot server running on port ${PORT}`);
});