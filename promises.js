const posts=async ()=>{
    [
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];
}

async function getPost(){
    let output='';
    const postsArray = await posts();
    postsArray.forEach((post,index)=>{
        output +=`<li>${post.title}</li>`;
    })
    document.body.innerHTML=output;



    const createPost = (post)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {

                const error = false;

                if(!error){
                    postsArray.push(post);
                    resolve();
                } else {
                    reject('Error: Something went wrong');
                }
            },2000);

        });
    };


    const deleteLastPost=()=> {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const poppedPost=postsArray.pop();
                if (postsArray.length>0){
                    resolve(poppedPost);
                }else{
                    reject("Error");
                }
            },1000)
        });
    };
}
async function run(){
    try{
    let [post,poppedPost] = await Promise.all([
        createPost({title:'Post Three',body:'This is Post three'}),
        deleteLastPost()
    ]);
    console.log(`${post},${poppedPost}`);
    getPost();
} catch (err){
    console.log(err);
}
}
run();






