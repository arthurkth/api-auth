import App from "./src/app.js";
import dotenv from "dotenv";

dotenv.config();

let app = new App(process.env.PORT);
try {
  app.start();
} catch (error) {
  console.log("Uncaught Error");
  console.log(error);
}
