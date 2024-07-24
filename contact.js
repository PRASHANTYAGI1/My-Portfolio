var tl = gsap.timeline();
tl.from("nav h1 ,nav ul li", {
    y: -100,
    duration: .1,
    stagger: .2,
    duration: .4,
    opacity: 0,
    delay: 1
}).from("#menu", {
    x: 200,
    opacity: 0,
    duration: .2
})
    .from("#maincontact h1", {
        x: -100,
        opacity: 0
    })
    .from(".left img", {
        x: -100,
        opacity: 0,
        scale: 2,
        duration: .3
    })
    .from(".innerdiv right ,form label ,.right form input ,form textarea", {
        y: 100,
        opacity: 0,
        dutation: .6,
        stagger:.2
    })

    // overall complete 