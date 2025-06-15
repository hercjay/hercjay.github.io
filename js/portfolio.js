const baseImgPath = "images/projects/";
const ext = ".png";
const webPortfolios = [
    {
        key: "herctodo",
        title: "Herc ToDo - AI-Powered",
        desc: "AI-Powered Todo Application with Intelligent Task Recommendation feature and more",
        stack: [ "JavaScript", "Tailwind", "PHP", "MySQL", "HTML", "CSS" ],
        imgMax: 6, //1.png, 6.png
        liveDemo: "https://herctodo.free.nf",
        github: "",
    },
    {
        key: "pepstudy",
        title: "PEP Study",
        desc: "A fully responsive and modern UI Gamified Learning webapp for Pharmacists preparing for their licensing exam",
        stack: [ "NextJS", "HTML", "Tailwind", "Typescript", "Firestore" ],
        imgMax: 4,
        imgExt: ".jpg",
        liveDemo: "https://rx-hustle.web.app/pep/self-study",
        github: "",
    },
    {
        key: "dashboard",
        title: "Analytics Dashboard",
        desc: "A fully responsive analytics dashboard design with theming functionality",
        stack: [ "PureCounter", "HTML", "Bootstrap", "JavaScript", "CSS" ],
        imgMax: 4,
        liveDemo: "https://hercjay.github.io/GeegpayChallengeFrontend",
        github: "https://github.com/hercjay/GeegpayChallengeFrontend",
    },
    {
        key: "e-commerce",
        title: "E-Commerce Website",
        desc: "A bilingual e-commerce website supporting English and French. Implemented features like adding items to the cart, pagination, product categorization and filtering, carousels, Admin dashboard inventory tracking,  and more.",
        stack: [ "jQuery", "AJAX", "JavaScript", "MySQL", "HTML", "PHP", "Bootstrap" ],
        imgMax: 4,
        imgExt: ".jpg",
        liveDemo: "",
        github: "",
    },
    {
        key: "pharmalister",
        title: "Pharmalister",
        desc: "A fully responsive and modern UI web app for a healthcare brand",
        stack: [ "Google Hosting", "HTML", "Google Auth", "JavaScript", "CSS", "Firestore", "bootstrap" ],
        imgMax: 5,
        liveDemo: "https://pharmalister.web.app",
        github: "",
    },
    {
        key: "workladda",
        title: "WorkLadda",
        desc: "A freelancing platform, catering to Anambra state, Nigeria. This platform facilitates both digital and physical services. Users can find service providers based on service type and location.",
        stack: [ "PHP", "HTML", "Bootstrap", "JavaScript", "MySQL" ],
        imgMax: 4,
        imgExt: ".jpg",
        liveDemo: "",
        github: "https://github.com/hercjay/workladda",
    },
    {
        key: "rxhustle",
        title: "Rx Hustle - Locum",
        desc: "A fully responsive and modern UI web app that enables Pharmacists and Pharmacies to advertise and discover work shifts and locum opportunities to make extra cash. Fully implemented with user Google signin, user dashboard, mailing and a robust search functionality.",
        stack: [ "React JS", "HTML", "Tailwind CSS", "JavaScript", "Google Firebase", "Firestore" ],
        imgMax: 4,
        liveDemo: "",
        github: "",
    },
    {
        key: "troway",
        title: "Troway",
        desc: "A waste management platform ideal for a state's waste management agency. The platform provides information distribution through text, audio, and video content. It facilitates waste levy payments and tracking while also supporting waste recycling by providing an interface for sale of recyclable items.",
        stack: [ "HTML", "JavaScript", "MySQL", "PHP", "Bootstrap" ],
        imgMax: 4,
        imgExt: ".jpg",
        liveDemo: "http://troway.epizy.com",
        github: "https://github.com/hercjay/troway",
    },
    {
        key: "pharma-crm",
        title: "Pharma CRM",
        desc: "A Customer relationship management (CRM) system for a Pharmaceutical establishment.",
        stack: [ "HTML", "PHP", "jQuery", "JavaScript", "MySQL", "Bootstrap", "AJAX" ],
        imgMax: 3,
        imgExt: ".jpg",
        liveDemo: "",
        github: "",
    },
]

function createWebPortfolioCard(portfolio) {
    // Generate a unique carousel id
    const carouselId = `carousel${portfolio.key}-${Math.random().toString(36).substr(2, 6)}`;

    // Card container
    const card = document.createElement('div');
    card.className = 'col-lg-5 portfolio-card p-0 m-2';
    card.setAttribute('data-aos', 'fade-up');

    // Card inner structure
    const mb4 = document.createElement('div');
    mb4.className = 'mb-4';

    // Carousel
    const carouselDiv = document.createElement('div');
    carouselDiv.id = carouselId;
    carouselDiv.className = 'carousel slide';
    carouselDiv.setAttribute('data-ride', 'carousel');

    // Carousel inner
    const carouselInner = document.createElement('div');
    carouselInner.className = 'carousel-inner mb-2';

    for (let i = 1; i <= portfolio.imgMax; i++) {
        const item = document.createElement('div');
        item.className = 'carousel-item' + (i === 1 ? ' active' : '');

        const img = document.createElement('img');
        const imgExtension = portfolio.imgExt || ext;
        img.src = `${baseImgPath}${portfolio.key}/${i}${imgExtension}`;
        img.className = 'img-thumbnail';
        img.alt = `${portfolio.key} Image ${i}`;

        item.appendChild(img);
        carouselInner.appendChild(item);
    }

    carouselDiv.appendChild(carouselInner);

    // Card body
    const cardBody = document.createElement('div');
    cardBody.className = 'portfolio-card-body p-3';

    // Title
    const title = document.createElement('h3');
    title.className = 'portfolio-card-title';
    title.textContent = portfolio.title;

    // Description
    const desc = document.createElement('p');
    desc.className = 'portfolio-card-text';
    desc.textContent = portfolio.desc;

    // Stack
    const stackDiv = document.createElement('div');
    stackDiv.className = 'd-flex justify-content-evenly mb-4';
    portfolio.stack.forEach(tech => {
        const small = document.createElement('small');
        small.className = tech.toLowerCase().split(" ").join("-");
        small.textContent = tech;
        stackDiv.appendChild(small);
    });

    // Links
    const linksDiv = document.createElement('div');
    linksDiv.className = 'd-flex justify-content-center align-items-center m-1';

    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';

    if (portfolio.liveDemo) {
        const demoLink = document.createElement('a');
        demoLink.href = portfolio.liveDemo;
        demoLink.target = '_blank';
        demoLink.className = 'btn btn-sm btn-outline-secondary';
        demoLink.textContent = 'Live Demo';
        btnGroup.appendChild(demoLink);
    }

    if (portfolio.github) {
        const githubLink = document.createElement('a');
        githubLink.href = portfolio.github;
        githubLink.target = '_blank';
        githubLink.className = 'btn btn-sm btn-outline-secondary';
        githubLink.textContent = 'GitHub';
        btnGroup.appendChild(githubLink);
    }

    if (btnGroup.childNodes.length > 0) {
        linksDiv.appendChild(btnGroup);
    }

    // Assemble card
    cardBody.appendChild(title);
    cardBody.appendChild(desc);
    cardBody.appendChild(stackDiv);
    cardBody.appendChild(linksDiv);

    mb4.appendChild(carouselDiv);
    mb4.appendChild(cardBody);

    card.appendChild(mb4);

    return card;
}

const webPortfolioDiv = document.getElementById('web-portfolio');



function loadWebPortfolios() {
    webPortfolios.forEach(portfolio => {
        const card = createWebPortfolioCard(portfolio);
        webPortfolioDiv.appendChild(card);
    });
} 



if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadWebPortfolios);
} else {
    loadWebPortfolios();
}


