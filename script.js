var tAbout = gsap.timeline()
var tContact = gsap.timeline()

gsap.from("nav .logo",{
  y:-100,
  duration:2,
  delay:0.5
})

gsap .to("nav .left ul li",{
  x:-250,
   duration:1,
   delay:0.5,
   stagger:1
})

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

tAbout.from(".about-us .left",{
  x:-800,
   duration:1,
   delay:0.5,
   scrollTrigger:".about-us .left"
})

gsap.from(".about-us .right",{
  x:800,
   duration:1,
   scrollTrigger:{
    trigger:".about-us ",
    scroller:"body",
    marker:true,
    start:"top 60%",
    end:"topp 30%",
    scrub:2,
  }
 
})

tAbout.from(".about-us .left ul li",{
  opacity:0,
  duration:2,
  stagger:1,
  scrollTrigger:{
    trigger:".about-us .left ul ",
    scroller:"body",
    marker:true,
    start:"top 60%",
    end:"topp 30%",
    scrub:2,
  }
})

gsap.from(".service .card-con .card",{
  rotate:360,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".service .card-con ",
    scroller:"body",
    marker:true,
    start:"top 60%",
    end:"topp 20%",
    scrub:2,
  }
 
})

gsap.from(" .feature .fea-info-con .left h4 ",{
  opacity:0,
  duration:1,
  stagger:1,
  scrollTrigger:{
    trigger:" .feature .fea-info-con .left ",
    scroller:"body",
    marker:true,
    start:"top 60%",
    end:"top 20%",
    scrub:2,
  }
 
})

gsap.from(" .feature .fea-info-con .right ",{
  x:800,
  duration:1,
  stagger:1,
  scrollTrigger:{
    trigger:" .feature .fea-info-con ",
    scroller:"body",
    marker:true,
    start:"top 60%",
    end:"top 20%",
    scrub:2,
  }
 
})

gsap.from(" .flip-card-inner .flip-card-front",{
  rotate:-360,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:" .flip-card-inner ",
    scroller:"body",
    marker:true,
    start:"top 60%",
    end:"top 20%",
    scrub:2,
  }
})

gsap.from(".price .card-con .card",{
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:" .price .card-con ",
    scroller:"body",
    marker:true,
    start:"top 60%",
    end:"top 20%",
    scrub:2,
  }
})


gsap.from(".contact .top   ",{
  opacity:0,
  duration:4,
  scrollTrigger:{
    trigger:".contact",
    scroller:"body",
    start:"top 60%",
    end:"top 20%",
    scrub:2
  }
})

gsap.from(".contact .bottom",{
  opacity:0,
  duration:5,
  scrollTrigger:{
    trigger:".contact",
    scroller:"body",
    start:"top 80%",
    end:"top 50%",
    scrub:2
  }
})


// Get the container element
var btnContainer = document.getElementById("link-con");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}