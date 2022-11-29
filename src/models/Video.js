import mongoose from "mongoose";

// 비디오의 형식 정의
const videoSchema= new mongoose.Schema({
    title: String,
    // = title:{type:String}
    description: String,
    createdAt: Date,
    hashtags: [{ type: String }],
    // String 배열
    meta:{
        views:Number,
        rating: Number,
    },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;

// import Video from "........" 다른 곳에서 import 할 수 있음