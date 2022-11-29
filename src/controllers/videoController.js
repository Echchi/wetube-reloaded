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
    console.log(videos);
    return res.render("home",{ pageTitle:"Home", videos });
};
export const watch =(req,res)=> {
   const { id }= req.params;
   res.render("watch", { pageTitle:`Watching` });
};
export const getEdit =(req,res)=> {
    const { id }= req.params;
    return res.render("edit",{ pageTitle:`Editing`});
};
export const postEdit =(req,res)=> {
    const { id }= req.params; 
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};
export const getUpload=(req,res)=>{
    return res.render("upload",{pageTitle:"Uplaod Video"});
};
export const postUpload= async (req,res)=>{
    const { title,description,hashtags } = req.body;
    await Video.create({
        title:title,
        description:description,
        createdAt: Date.now(),
        hashtags: hashtags.split(",").map((word) => `#${word}`),
        meta:{
            views: 0,
            rating: 0,
        },
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
};

