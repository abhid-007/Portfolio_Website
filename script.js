import LocomotiveScroll from 'locomotive-scroll';


const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

var a = document.querySelector ("#elem1")
var abc = a-getAttribute("clas$")
console.log(abc)




/* var elemC= document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
/*






/* var elemC= document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})
var elems = document.querySelectorA11(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url`
    })
})
*/
