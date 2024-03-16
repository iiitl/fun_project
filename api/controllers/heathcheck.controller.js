

module.exports.heathcheck = (req, res) => {
  return res.status(200).json({ message: "Server is Up and Running" });
}