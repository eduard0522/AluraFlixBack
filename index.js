import app from "./src/app.js";
import { connectionDB } from "./src/db/index.js";

const port = process.env.PORT || 9876
connectionDB()

app.listen(port , () => {
  console.log("Server is running on port 9876");
});