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