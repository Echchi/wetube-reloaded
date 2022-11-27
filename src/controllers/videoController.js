let videos = [
    {
        title:"first video",
        rating:5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 1,
        id: 1,
    },
    {
        title:"second video",
        rating:5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2,
    },
    {
        title:"third video",
        rating:5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3,
    },
];


export const trending =(req, res)=> {
    return res.render("home",{pageTitle:"Home",videos})
};
export const watch =(req,res)=> {
   const { id }= req.params;
   const video = videos[id-1];
   res.render("watch", { pageTitle:`Watching ${video.title}`, video:video });
};
export const getEdit =(req,res)=> {
    const { id }= req.params;
    const video = videos[id-1];   
    return res.render("edit",{ pageTitle:`Editing: ${video.title}`, video:video });
};
export const postEdit =(req,res)=> {
    const { id }= req.params;  
    videos[id-1].title = req.body.title;
    return res.redirect(`/videos/${id}`);
};
export const getUpload=(req,res)=>{
    return res.render("upload",{pageTitle:"Uplaod Video"});
};
export const postUpload=(req,res)=>{
    const { title } = req.body;
    const newVideo ={
        title,
        rating:0,
        comments: 0,
        createdAt: "just Now",
        views: 0,
        id: videos.length+1,
    };
    videos.push(newVideo);
    return res.redirect("/");
};

