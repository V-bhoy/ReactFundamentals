const p1 = new Promise((resolve)=>{
    setTimeout(()=>{resolve("p1 resolved");}, 5000);
})

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{ resolve("p2 resolved");}, 10000);

})

async function handlePromise(){
   console.log("async function started");
   const data1 = await p1;
   console.log(data1);
   const data2 = await p2;
   console.log(data2);
   console.log("Finished executing");
}

async function handlePromise1(){
    console.log("async function started");
    const data12 = await p2;
    console.log("CASE2: "+data12);
    const data11 = await p1;
    console.log("CASE2: "+data11);
    console.log("Finished executing");
}

async function handlePromise2(){
    console.log("async function started");
    const data22 = await p1;
    console.log("CASE3: "+data22);
    const data21 = await p1;
    console.log("CASE3: "+data21);
    console.log("Finished executing");
}

// comment out each function and observe the behaviour
handlePromise();
handlePromise1();
handlePromise2();
console.log("END OF PROGRAM");