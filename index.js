import app from "./src/app.js";
import { connectionDB } from "./src/db/index.js";

connectionDB()

app.listen(9876 , () => {
  console.log("Server is running on port 9876");
});