var tl = gsap.timeline({

});
tl
.from("#center",{
    x: -1900,
    ease: Expo.easeInOut,
    stagger: 2
    
},1)

tl
.from("#nav",{
    y: -200,
    ease: Expo.easeInOut,
    duration: 1,
    
},1)
tl
.from("#text h5,h2",{
    x: -500,
    ease: Expo.easeInOut,
    duration: 1,
    stagger: 1
})