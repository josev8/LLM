import openai

# Set up OpenAI with Azure configuration
openai.api_type = "azure"
openai.api_base = "https://llm-sandy.openai.azure.com/"
openai.api_version = "2023-07-01-preview"
openai.api_key = "110c836b62924f78a17d39339ce8089e"

# Create a list of message objects, including the initial message and any subsequent conversation
messages = [
    {"role": "system", "content": "Hi! You are chat bot to help people with their tasks!"},
    {"role": "user", "content": ""}
]

# Generate a code completion based on the conversation so far
response = openai.ChatCompletion.create(
    engine="llm",
    messages=messages,
    temperature=0.7,
    max_tokens=20,
    top_p=0.95,
    frequency_penalty=0,
    presence_penalty=0,
    stop=None
)

# Extract and print the generated code from the response
generated_code = response.choices[0].message["content"]
print(generated_code)
