var tl = gsap.timeline()
tl.from("nav h1,nav ul li,nav i",{
    y :-100,
    duration:.5,
    delay:.2,
    stagger:.2,
    opacity:0
})
.from("#aboutcont h1",{
    x:-500,
    opacity:0,
    duration:.3
}).from(".abtleft svg",{
    x:-100, 
    opacity:0
})
.from(".abtimg",{
    x:100,
    opacity:0
}).from(".abtpara",{
    x:-300,
    opacity:0
})
var t2 = gsap.timeline({scrollTrigger:{
    trigger:".abtpara",
    start:"70% 50%",
    end:"100% 50%",
    // markers:true
}})
t2.from(".skillhead",{
    x:500,
    opacity:0,
    duration:.3,

})
// var t3 = gsap.timeline({scrollTrigger:{
//     trigger:".skillhead",
//     start:"70% 50%",
//     end:"0% 50%",
//     markers:true
// }})
// t3.from(".skill h2",{
//     x:500,
//     opacity:0,
//     duration:.5,
//     stagger:.2,
//     // scrub:.2,
// })

