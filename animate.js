var elemetns = document.querySelectorAll('.animate')
console.log(elemetns)
var observer = new IntersectionObserver((elemetng)=>{
    elemetng.forEach((e)=>{
        if(e.isIntersecting){
            e.target.classList.add('visible')
        }
        else{
            e.target.classList.remove('visible')
        }
    })
},{threshold:0.15})

elemetns.forEach((e)=>{observer.observe(e)})