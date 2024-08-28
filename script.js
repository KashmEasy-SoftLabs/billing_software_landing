AOS.init();
gsap.registerPlugin(ScrollTrigger);

if (!matchMedia("(max-width: 768px)").matches) {
    const config = {
        trigger: ".scroll-animation",
        scrub: true,
        pin: true,
        start: matchMedia("(max-width: 768px)").matches
            ? "top center"
            : "top top",
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

if (matchMedia("(max-width: 768px)").matches) {
    document.querySelector(".main-heading").innerHTML =
        "Streamline Your GST Billing with ease";
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

async function sleep(miliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, miliseconds);
    });
}

window.addEventListener("load", async () => {
    for (let i = 0; i <= 100; i++) {
        loaderText.innerHTML = `${i}%`;
        await sleep(20);
        if (i == 23) {
            await sleep(100);
        } else if (i == 47) {
            await sleep(500);
        }
    }
    document.querySelector(".loader").style.transition = "all .5s";
    document.querySelector(".loader").style.transform = "translateY(-100%)";
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
    }, 1000);
    // document.querySelector("header").style.display = "block";
    // document.querySelector("main").style.display = "block";
    // document.querySelector("footer").style.display = "block";
});
// document.querySelector(".loader").


const tiltEffectSettings = {
    max: 25,
    perspective: 1000,
    scale: 1.05,
    speed: 500,
    easing: "cubic-bezier(.03,.98,.52,.99)"
};

const cards = document.querySelectorAll(".tilt-effect");

cards.forEach((card) => {
    // Create glare element
    const glare = document.createElement("div");
    glare.classList.add("glare");
    card.appendChild(glare);
    card.glare = glare;

    card.addEventListener("mouseenter", cardMouseEnter);
    card.addEventListener("mousemove", cardMouseMove);
    card.addEventListener("mouseleave", cardMouseLeave);
    card.transitionTimeoutId = null; // Initialize the transitionTimeoutId property
});

function cardMouseEnter(event) {
    setTransition(event);
}

function cardMouseMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;
    const centerX = rect.left + cardWidth / 2;
    const centerY = rect.top + cardHeight / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateXUncapped = (tiltEffectSettings.max * mouseY) / (cardHeight / 2);
    const rotateYUncapped = (-tiltEffectSettings.max * mouseX) / (cardWidth / 2);
    const rotateX = Math.max(Math.min(rotateXUncapped, tiltEffectSettings.max), -tiltEffectSettings.max);
    const rotateY = Math.max(Math.min(rotateYUncapped, tiltEffectSettings.max), -tiltEffectSettings.max);

    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;

    // Update glare effect
    const {glare} = card;
    const glareAngle = Math.atan2(mouseY, mouseX) * (180 / Math.PI) + 90;
    const glareOpacity = Math.sqrt(mouseX * mouseX + mouseY * mouseY) / (Math.sqrt(cardWidth * cardWidth + cardHeight * cardHeight) / 2);
    glare.style.transform = `rotate(${glareAngle}deg) translate(-50%, -50%)`;
    glare.style.opacity = `${glareOpacity}`;
}

function cardMouseLeave(event) {
    event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    event.currentTarget.glare.style.opacity = `0`;
    setTransition(event);
}

function setTransition(event) {
    const card = event.currentTarget;
    clearTimeout(card.transitionTimeoutId);
    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    card.glare.style.transition = `opacity ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    card.transitionTimeoutId = setTimeout(() => {
        card.style.transition = "";
        card.glare.style.transition = "";
    }, tiltEffectSettings.speed);
}