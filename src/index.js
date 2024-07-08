import app from "./app.js";
import { connectionDB } from "./db/index.js";

connectionDB()

app.listen(9876 , () => {
  console.log("Server is running on port 9876");
});