// const videoItem=[
//     {id:1,img:'/vImg.svg',title:'Lorem ipsum dolor sit amet Lorem ipsum 1',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',date:'29 July ',link:'see more'},
//     {id:2,img:'/vImg.svg',title:'Lorem ipsum dolor sit amet Lorem ipsum 2',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',date:'29 July ',link:'see more'},
//     {id:3,img:'/vImg.svg',title:'Lorem ipsum dolor sit amet Lorem ipsum 3',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',date:'29 July ',link:'see more'},
//     {id:4,img:'/vImg.svg',title:'Lorem ipsum dolor sit amet Lorem ipsum 4',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',date:'29 July ',link:'see more'},
// ]
// export default videoItem


export const getPostsData=async ()=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/posts",
    {cache:"no-store"} // in default is "ssg"  when you write {cache:"no-store"}  change to "ssr"  and for "isr" you write {next:{ravalidate:"60"}} (60 means refres besho har 60 sanie)
    );
    return data.json();
}

export const getSinglePostData=async (id)=>{
    const data = await fetch(`http://moviesapi.ir/api/v1/movies/${id}`,
    {cache:"no-store"} // in default is "ssg"  when you write {cache:"no-store"}  change to "ssr"  and for "isr" you write {next:{ravalidate:"60"}} (60 means refres besho har 60 sanie)
    );
    return data.json();
}

