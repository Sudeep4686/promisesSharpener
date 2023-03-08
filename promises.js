const posts=[
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output +=`<li>${post.title}</li>`;

        });
        document.body.innerHTML=output;

    },1000);
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        },2000);

    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const lastActivitytime = new Date().toLocaleTimeString();
            resolve(lastActivitytime);
        },1000);
    })
}

function deleteLastPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const poppedPost=posts.pop();
            if (posts.length>0){
                resolve(poppedPost);
            }else{
                reject("Error");
            }
        },1000)
    })
}


createPost({title:'Post three', body: 'This is post Three'})
    .then(()=>{
        return updateLastUserActivityTime();
    })
    .then((lastActivitytime)=>{
        console.log(`User last active at: ${lastActivitytime}`);
        console.log("All posts : ");
        posts.forEach((post)=>console.log(post.title));
        return deleteLastPost();
    })
    .then(()=>{
        console.log("Posts after deleting the last post : ");
        posts.forEach((post)=> console.log(post.title));
    })

// promise.all
//const promise1 = Promise.resolve('Hello World');
//const promise2 = 10;
//const promise3 = new Promise((resolve,reject)=>
//setTimeout(resolve,2000,'Good Bye'));


//Promise.all([promise1,promise2,promise3])
 //   .then((values)=> console.log(values));
