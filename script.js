gsap.from(".hero .right img",{
    x:600,
    duration:2,
    delay:0.5
})
gsap.from(".hero .left",{
    y:-600,
    duration:2,
    delay:0.5
})

gsap.to("nav .left ul li",{
   x:-250,
    duration:1,
    delay:1,
    stagger:1
})
