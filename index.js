const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
const dotenv = require("dotenv"); 

dotenv.config();
const app = express();
const port = process.env.PORT;

const azureApiKey = process.env.AZURE_API_KEY; 
const endpoint = process.env.AZURE_ENDPOINT; 

app.use(bodyParser.json());
app.use(cors());

const generateMessage = async (data) => {
  const messages = [
    { role: "system", content: `You are a bot to help people with their tasks: ${data}` },
  ];

  try {
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
    const deploymentId = process.env.DEPLOYMENT_ID;
    const result = await client.getChatCompletions(deploymentId, messages);

    for (const choice of result.choices) {
      const msg = choice.message.content;
      return msg;
    }
  } catch (err) {
    console.error("Error generating message:", err);
    throw err;
  }
};

app.post("/", async (req, res) => {
  const { inpMessage } = req.body;

  try {
    const msg = await generateMessage(inpMessage);
    res.json({ msg });
  } catch (err) {
    res.status(500).json({ error: "An error occurred while generating the message." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
