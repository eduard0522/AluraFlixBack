
const validateSchema = (Schema) =>  (req,res,next) => {
  console.log(req.body)
  try {
    const validateDates = Schema.parse(req.body);
    validateDates   && next();
  } catch (error) {
    res.status(400).json({ message : error.errors.map(err => err.message) });
  }
}

export default validateSchema;