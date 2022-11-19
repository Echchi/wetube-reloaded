import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (req,res)=> res.send("HELLO");
const login = (req,res)=> {
    res.send("login"); 
}

app.use(logger);
app.get("/login",login);
app.get('/', home);


const handleListening = () =>
    console.log(`🚀 Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);