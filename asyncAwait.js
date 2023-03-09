console.log('person1: shows ticket')
console.log('person2: shows ticket')

const preMovie = async ()=> {

    const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });

    const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));
    const addButter = new Promise((resolve,reject)=> resolve(`butter`));
    const getColdDrinks = new Promise((resolve,reject)=>resolve('coldDrinks'));
    let ticket = await promiseWifeBringingTicks;

    let [popcorn,butter,coldDrinks] = await Promise.all([getPopcorn,addButter,getColdDrinks])
    console.log(`${popcorn},${butter},${coldDrinks}`);



    return ticket;

}


preMovie().then((m)=> console.log(m));

console.log('person4: shows ticket');
console.log('person5: shows ticket');


