const addController = (req, res) => {
  //Daniel suggested code improements. Said Og was functional but not great.
  const num1 = parseFloat(req.query.num1); //float not int & const not let
  const num2 = parseFloat(req.query.num2);
  //gaps in code are needed for readiblity,remember.//
  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .json({ error: "Invalid entry, please provide valid numbers." });
  }
  res.status(200).json({ result: num1 + num2 }); //Remember that the code is reused. Just correct TOp const and res.status equtaion
};

const subController = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .json({ error: "Invalid entry, please provide valid numbers." });
  }
  res.status(200).json({ result: num1 - num2 });
};

const divideController = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .json({ error: "Invalid entry, please provide valid numbers." });
  }
  if (num2 === 0) {// Needed.The division route should return an error insead of infinity.
    return res.status(400).json({ error: "Cannot divide by zero." }); // Note thhat  the division is  different due to the 0 if.
  }
  res.status(200).json({ result: num1 / num2 });
};

const multiplyController = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .json({ error: "Invalid entry, please provide valid numbers." });
  }
  res.status(200).json({ result: num1 * num2 });
};

module.exports = {// ensure all controllers ready for export.
  addController,
  subController,
  divideController,
  multiplyController,
};
