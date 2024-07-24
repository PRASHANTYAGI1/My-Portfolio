var t1  =  gsap.timeline()
t1.from("nav h1, nav ul li",{
    y:-50,
    opacity:0,
    duration:.7,
    delay:.1,
    stagger:.3,
})
gsap.from("nav i",{
    rotate:360,
    duration:.5
})
t1.from(".rightcont",{
    x:200,
    opacity:0,
    delay:.2
})
.from(".leftcont",{
    x:-200,
    opacity:0
})
// Register the ScrollTrigger plugin
var t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".leftcont",
      start: "0% 5%",
      end: "50% 50%",
    //   markers: true
    }
  });
  
  t2.from("#workwrapper h1", {
    x: 200,
    opacity: 0,
    duration:0.7
  })
  .from(".dv",{
    z:150,
    rotate:360,
    opacity:0,
    duration:.5,
    delay:1,
    stagger:0.9,
  })
//   doubt
  var t3 = gsap.timeline({
    scrollTrigger:{
    trigger:".workheader",
    start:"100% 5%",
    end:"100% 100%",
    // markers:true,
  }})
  t3.from("#contactpg h1",{
    y:50,
    opacity:0,
    duration:.5,
    delay:.1,
  }).from(".dvcontact",{
    z:50,
    opacity:0,
    duration:.2,
    delay:.1
  })
  



