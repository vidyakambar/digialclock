function Clockstart()
{
    let date=new Date();
    let hours=date .getHours();
    let minutes=date .getMinutes();
    let seconds=date .getSeconds();
    if(hours>12){
        hours=hours-12;
        let am = document.getElementById("am");
        am.innerText="PM";
        am.style.fontSize="40px"
    }
    else{
        let am = document.getElementById("am");
        am.innerText="AM";
        am.style.fontSize="40px"
    }
     if(hours > 9)
    {
        let a=document.getElementById("healthy");
        a.innerText="CLOSE YOUR EYES AND SLEEP!!!";
        let b=document.getElementById("morning");
        b.innerText="GOOD NIGHT !! SLEEP!!";
        b.style.fontSize="20px";
        b.style.color="white";
        //b.style.fontFamily="italic";
        //b.style.position="absolute";
        
    }
    if(hours > 9 )
    {
        let a=document.getElementById("healthy");
        a.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        let b=document.getElementById("morning");
        b.innerText="GOOD NIGHT !!";
        //let c=document.getElementById("img")
        //c.innerHTML=`<img src="/.night.png">`
        b.style.fontSize="40px";
        b.style.color="white";
        //b.style.margin-left="20px"
        //b.style.fontFamily="italic";
        //b.style.position="absolute";
        
    }
    if(hours > 3)
    {
        let a=document.getElementById("healthy");
        a.innerText="Get Some Tea Good Evening!!!";
        let b=document.getElementById("morning");
        b.innerText="Good Evening!!!";
        b.style.fontSize="40px";
        b.style.color="white";
        //b.style.margin-left="20px"
        //b.style.fontFamily="italic";
        //b.style.position="absolute";
        
    }
    if(hours > 1)
    {
        let a=document.getElementById("healthy");
        a.innerText="LET'S HAVE SOME LUNCH !!";
        let b=document.getElementById("morning");
        b.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
        b.style.fontSize="20px";
        b.style.color="white";
        //b.style.margin-left="20px"
        //b.style.fontFamily="italic";
        //b.style.position="absolute";
        
    }
    



    
    let hrs=document.getElementById("hrs");
    hrs.innerText=hours;
    hrs.style.fontSize="40px"
    let mins=document.getElementById("mins");
    mins.innerText=minutes;
    mins.style.fontSize="40px"
    let secs =document.getElementById("sec");
    secs.innerText=seconds;
    secs.style.fontSize="40px"
}
setInterval(()=>{
    Clockstart();

},1000);




    

