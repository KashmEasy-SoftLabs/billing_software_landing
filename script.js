AOS.init();
gsap.registerPlugin(ScrollTrigger);

if(!matchMedia('(max-width: 768px)').matches){

    const config = {
        trigger: ".scroll-animation",
        scrub: true,
        pin: true,
        start: matchMedia("(max-width: 768px)").matches ? "top center" : "top top",
        end: "+=1000",
    };
    
    gsap.from(".scroll-animation img", {
        scrollTrigger: config,
        // clipPath: "polygon(20% 0%, 80% 0%, 100% 70%, 0 69%)",
        y: -300,
        rotateX: 50,
        rotateY: 30, // Additional rotation for a 3D effect
        translateZ: 100, // Adds depth to the animation
        duration: 1,
        opacity: 0.3,
    });
}

if(matchMedia('(max-width: 768px)').matches){
    document.querySelector('.main-heading').innerHTML = "Streamline Your GST Billing with ease"
}

let billingSection = document.querySelector(".section-3-main");

let billingTexts = [
    {
        text: "Billing Management",
        icon: "fa-check",
    },
    {
        text: "Multi-Industry Support",
        icon: "fa-check",
    },
    {
        text: "Stock Management",
        icon: "fa-check",
    },
    {
        text: "GST Management",
        icon: "fa-check",
    },
    {
        text: "Sales Analytics",
        icon: "fa-check",
    },
    {
        text: "Customer Management",
        icon: "fa-check",
    },
    {
        text: "Online Backup",
        icon: "fa-check",
    },
];

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
});

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

let loaderText = document.querySelector(".loader .loader-inner");

async function sleep(miliseconds){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, miliseconds);
    });
}

window.addEventListener("load",async () => {
    for(let i = 0; i <= 100; i++){
        loaderText.innerHTML = `${i}%`;
        await sleep(20);
        if(i == 23){
            await sleep(100);
        }else if(i == 47){
            await sleep(500)
        }
    }
    document.querySelector(".loader").style.transition = "all .5s";
    document.querySelector(".loader").style.transform = "translateY(-100%)";
    setTimeout(()=>{
        document.querySelector(".loader").style.display = "none";
    }, 5000);
    // document.querySelector("header").style.display = "block";
    // document.querySelector("main").style.display = "block";
    // document.querySelector("footer").style.display = "block";
});
// document.querySelector(".loader").
