import mongoose from "mongoose";

// 비디오의 형식 정의
const videoSchema= new mongoose.Schema({
    title: { type: String, required: true },
    // = title:{type:String}
    description: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type: String }],
    // String 배열
    meta:{
        views:{ type: Number, default: 0, required: true },
        rating: { type: Number, default: 0, required: true }
    },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;

// import Video from "........" 다른 곳에서 import 할 수 있음