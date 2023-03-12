const { Configuration, OpenAIApi } = require("openai");

const openAi = async (prompt) => {

  try {
    const config = new Configuration({
      apiKey: process.env.OPENAI_SECRET_KEY,
    });
    const openai = new OpenAIApi(config);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 7,
    });
    console.log(response)
    return response.data.choices[0].text;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  openAi,
};
