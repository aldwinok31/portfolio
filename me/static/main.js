//Hello Viewer  
window.addEventListener("load",async ()=>{
    var observeElTimeoute;
    var isVisible =  await observerEl(document.getElementById("dev-skill"));
    document.addEventListener("scroll",(e)=>{
        clearTimeout(observeElTimeoute)
       observeElTimeoute = setTimeout(async ()=>{
        isVisible = await observerEl(document.getElementById("dev-skill"));
        var isVisible2 = await observerEl(document.getElementById("panel"));

         triggerAnimation(document.getElementById("dev-skill"),isVisible)
       //  triggerAnimation(document.getElementById("panel"),isVisible2)

    },100)
    })

})

//observer for the elements

const observerEl = (element)=>{
    return new Promise(resolve =>{
        const o = new IntersectionObserver(([entry]) =>{
            resolve(entry.intersectionRatio === 1);
            o.disconnect();
        })

        o.observe(element);
    })
}

const triggerAnimation =  (el,isVisible) =>{
    if(isVisible){
    el.style.animation="none";
    el.offsetHeight;
    el.style.animation=null;
        return true;
    }
    return false;
}