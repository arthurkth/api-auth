import App from "./src/app.js";
import dotenv from "dotenv";

dotenv.config();

let app = new App(process.env.PORT);
app.start();
