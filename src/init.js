import "./db";
import "./models/Video";
// db와 mongoose를 연결시켜서 video Model을 인식시킨다
import app from"./server";

const PORT = 4000;

const handleListening = () =>
    console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);