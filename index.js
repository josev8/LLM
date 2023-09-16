
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// const configuration = new Configuration({
//     organization: "org-1Z0jLOS0cKxxtI07BBlPFwjK",
//     apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);
const openai = new OpenAI({
  apiKey: "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",
});

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {

  const response = await openai.chat.completions.create({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data);
  res.json({
    message: "Hello world"
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

