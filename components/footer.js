// let number = "1234567890";
const footerData = {
    company: {
        logo: "logo.png",
        name: "Kashmoney",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    "Quick Links": {
        "Home": "#",
        "About": "#",
        "Services": "#",
        "Contact": "#",
    },
    "Contact": {
        "fa-solid fa-location-dot": {
            "#link": "KashmEasy Softlabs, 3rd floor, Rather complex, HDFC Bank, Munawarabad, Srinagar, J&K - 190001"
        },
        "fa-solid fa-phone": {
            "tel:+91 1234567890": "+91 1234567890"
        },
        "fa-solid fa-envelope": {
            "mailto:info@kashmeasy.com": "info@kashmeasy.com"
        }
    },
}

const credits = {
    "Designed & Developed By": {
        "name": "KashmEasy Softlabs",
        "link": "https://kashmeasy.com"
    },
    social_links: [
        {
            "icon": "facebook",
            "link": "#"
        },
        {
            "icon": "twitter",
            "link": "#"
        },
        {
            "icon": "linkedin",
            "link": "#"
        },
        {
            "icon": "instagram",
            "link": "#"
        }
    ]
}




let footer = document.querySelector("footer");
let footerContent = `
    <div class="company-footer">
        <div>
            <h2 class="text-uppercase">${footerData?.company?.name}</h2>
            <p class="text-dim">${footerData?.company?.description}</p>
        </div>
    </div>
`;

for (let key in footerData) {
    if (key != "company" && key != "Contact") {
        footerContent += `
            <div>
                <h3 class="text-uppercase">${key}</h3>
                <ul>
        `;
        for (let key2 in footerData[key]) {
            footerContent += `
                <li><a href="${footerData[key][key2]}">${key2}</a></li>
            `;
        }
        footerContent += `
                </ul>
            </div>
        `;
    }
    if (key == "Contact") {
        footerContent += `
            <div>
                <h3 class="text-uppercase">${key}</h3>
                <ul>
        `; 
        for (let key2 in footerData[key]) {
            footerContent += `
                <li><a href="${Object.keys(footerData[key][key2])[0]}"><i class="fas fa-${key2}"></i> ${Object.values(footerData[key][key2])[0]}</a></li>
            `;
        }
        footerContent += `
                </ul>
            </div>
        `;
    }
}



footer.innerHTML = footerContent;
footer.innerHTML += `
    <div class="credits text-dim flex" style="width:100vw;">
        <p>${credits["Designed & Developed By"]["name"]} &copy; ${new Date().getFullYear()}</p>
        <div class="social-links">
        ${
            credits.social_links.map((item) => {
                return `
                    <a href="${item.link}" target="_blank"><i class="fab fa-${item.icon}"></i></a>
                `;
            }).join("")
        }
        </div>
    </div>
`
