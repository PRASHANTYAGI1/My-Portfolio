// var t1 = gsap.timeline({scrollTrigger:{
//     trigger:".workcont",
//     start:"0% %",
//     end:"50% 50%",
//     markers:true,
// }})
gsap.registerPlugin(ScrollTrigger);



var t1 = gsap.timeline()

t1.from("nav h1",{
    y:-60,
    duration:.9,
    delay:.1
})
t1.from("#menu",{
    x:500,
    duration:.2
})
.from("nav ul>li",{
    y: -50,
    duration:.3,
    stagger:.2,
})
.from("#workwrapper h1",{
    x:-50,
    opacity:0,
    duration:.3
})
.from(".dv",{
    y:1000,
    stagger:.2,
    opacity:0
});
// Get the menu element

