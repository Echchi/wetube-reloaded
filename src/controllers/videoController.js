import Video from "../models/Video";

/* 콜백함수 
Video.find({},(error, videos) =>{
    // {} = search term : 모든 형식을 찾는다
    if(error){
        retrun res.render("server-error");
    }
    return res.render("home",{ pageTitle:"Home", videos });
});
*/

export const home = async(req, res)=> {
    const videos = await Video.find({});
    return res.render("home",{ pageTitle:"Home", videos });
};

export const watch = async (req,res)=> {
   const { id }= req.params;
   const video = await Video.findById(id);
   if(!video){
       return res.render("404", { pageTitle:"Video not found" });
    }   
    return res.render("watch", { pageTitle:video.title, video });
};

export const getEdit = async (req,res)=> {
    const { id }= req.params;
    console.log("수정할 비디오 아이디",id);
    const video = await Video.findById(id);
    console.log(video);
    if(!video){
        return res.render("404", { pageTitle:"Video not found" });
     }   
    return res.render("edit",{ pageTitle:`Edit ${video.title}`, video});
};

export const postEdit = async (req,res)=> {
    const { id }= req.params; 
    const {title, description, hashtags} = req.body;
    const video = await Video.exists({_id: id});
    if(!video){
        return res.render("404", { pageTitle:"Video not found" });
     }
     await Video.findByIdAndUpdate(id, {
        title,
        description,
        hashtags,
     });

     return res.redirect(`/videos/${id}`);
}; 

export const getUpload=(req,res)=>{
    return res.render("upload",{pageTitle:"Uplaod Video"});
};
export const postUpload= async (req,res)=>{
    const { title,description,hashtags } = req.body;
try{
    await Video.create({
        title:title,
        description:description,
        hashtags: hashtags,
    });
    /*
    const video = new Video({
        title:title,
        description:description,
        createdAt: Date.now(),
        hashtags: hashtags.split(",").map((word) => `#${word}`),
        meta:{
            views: 0,
            rating: 0,
        },
    });
    await video.save();
    */
    return res.redirect("/");
}catch(error){
    return res.render("upload", { pageTitle : "Upload Video", errorMessage : error._message, })
}
};

