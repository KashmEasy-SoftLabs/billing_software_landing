const navLinks = [
    {
        text : "home",
        url : "#"
    },
    {
        text : "about",
        url : "#"
    },
    {
        text : "pricing",
        url : "#"
    },
    {
        text : "contact",
        url : "#"
    }
]


function loadNavBar(){
    const navBar = document.querySelector('.nav-bar');
    let navItems = '';
    navLinks.forEach(link => {
        navItems += `
                <li class="nav-links">
                    <a href="${link.url}">${link.text}</a>
                </li>
        `
    });
    navBar.innerHTML = navItems;
}


loadNavBar();