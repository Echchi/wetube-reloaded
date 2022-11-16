import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} : ${req.url}`);
    next();
};

const privateMiddleware = (req, res, next)=>{
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>NOT ALLOWED</h1>");
    }
    console.log("OKAY YOU CAN CONTINUE");
    next();
}

const handleAim = (req, res) => {
   return res.send("I love middleware!");
}
;
const handlelogin = (req, res) => {
   return res.send({msg : "LOGIN HERE 💞"});
};
 

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleAim);
// = button.addEventListener("click",handleClick);

const handleListening = () =>
    console.log(`🚀 Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);