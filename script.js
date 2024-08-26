AOS.init();
gsap.registerPlugin(ScrollTrigger);


gsap.from(".scroll-animation" , {
    scrollTrigger: {
        trigger: ".scroll-animation",
        // start: "top center",
        // end: "bottom 60%",
        scrub : true,
        // markers: true,
        pin:true,

        // toggleActions: "play none none none",
        start:"top top",
        end : "+=1000"
    },
    y: -300,
    rotateX : 50,
    duration: 1,
    opacity: 0.2
 });

let billingSection = document.querySelector(".section-3-main");

let billingTexts = [
    {
        text  : "Billing Management",
        icon : "fa-check"
    },
    {
        text : "Multi-Industry Support",
        icon : "fa-check"
    },
    {
        text : "Stock Management",
        icon : "fa-check"
    },
    {
        text : "GST Management",
        icon : "fa-check"
    },
    {
        text : "Sales Analytics",
        icon : "fa-check"
    },
    {
        text : "Customer Management",
        icon : "fa-check"
    },
    {
        text : "Online Backup",
        icon : "fa-check"
    }
]


billingTexts.forEach((item, index) => {
    let billingItem = document.createElement("div");
    billingItem.classList.add("billing-item");
    billingItem.innerHTML = `
    <div data-aos="fade-up" data-aos-delay="${50 * index}">
        <i class="fa ${item.icon} text-large font-bold" ></i>
        <p>${item.text}</p>
        </div>
    `;
    billingSection.appendChild(billingItem);
})

// gsap.from(".scroll-animation", {
//     scrollTrigger : {
//         scrub : true,
//         trigger : ".scroll-animation",
//         // start : "top top",
//         // end : "bottom 60%",
//     },
//     y : -500,
// })

// gsap.from(".section-child", {
//     scrollTrigger: {
//         trigger: ".section-child",
//         stagger : 0.5,
//         start: "top center",
//         end: "bottom 60%",
//         scrub: 2,
//         // toggleActions: "play none none none",
//         markers: true
//     },
//     y: -500,
//     duration: 1,
//     opacity: 0
// })


// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".section-child",
//         start: "top center",
//         end: "bottom 60%",
//         scrub: 2,
//         // toggleActions: "play none none none",
//         markers: true
//     }
// });

// tl.from(".section-child", {
//     y: -500,
//     duration: 1,
//     opacity: 0
// })

