import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

// const azureApiKey = "110c836b62924f78a17d39339ce8089e"; // Replace with your Azure OpenAI API key
// const endpoint = "https://llm-sandy.openai.azure.com/"; // Replace with your Azure OpenAI endpoint URL

// const generateSummary = async (data) => {
//   const messages = [
//     { role: "user", content: `You are a bot to help people with their tasks: ${data}` },
//   ];

//   try {
//     const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
//     const deploymentId = "llm";
//     const result = await client.getChatCompletions(deploymentId, messages);

//     for (const choice of result.choices) {
//       const summary = choice.message.content;
//       return summary;
//     }
//   } catch (err) {
//     console.error("The sample encountered an error:", err);
//     // You might want to handle errors more gracefully here
//   }
// };

// // Example usage:
// const textToSummarize = "python code to reverse string";
// generateSummary(textToSummarize)
//   .then((summary) => {
//     console.log("Summary:", summary);
//   })
//   .catch((err) => {
//     console.error("Error generating summary:", err);
//   });
