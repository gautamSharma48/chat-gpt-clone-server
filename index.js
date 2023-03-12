const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes");
const { Configuration, OpenAIApi } = require("openai");
const app = express();
const port = process.env.PORT || 8080;

// const config = new Configuration({
//   apiKey: process.env.OPENAI_SECRET_KEY,
// });
// const openai = new OpenAIApi(config);


app.use(express.json());
app.use(cors());
app.use("/",routes);


app.listen(port, () => console.log(`server connected with ${port}`));

// async (req, res) => {
//     try {
//       const { prompt } = req.body;
//       const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: `${prompt}`,
//         temperature: 0.7,
//         max_tokens: 3000,
//         top_p: 1,
//         frequency_penalty: 0.5,
//         presence_penalty: 0,
//       });
//       console.log(response);
//       res.status(200).send({ bot: response.data.choices[0].text });
//     } catch (err) {
//       console.log(err);
//       res.status(500).send(err);
//     }
//   })