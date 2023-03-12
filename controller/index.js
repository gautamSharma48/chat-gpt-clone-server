const { openAi } = require("../service/openAi");

const searchQuestion = async (req, res) => {
  try {
    const { prompt } = req.body;
    const resultAi = await openAi(prompt);
    res.status(200).json({ bot: resultAi });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
};

module.exports = {
  searchQuestion,
};
