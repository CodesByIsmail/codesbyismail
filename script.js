const openToggle = document.getElementById('menu-open');
const closeToggle = document.getElementById('menu-close');
const navMenu = document.querySelector('.nav__list');

openToggle.addEventListener('click', function () {
    navMenu.style.display = 'block';
    openToggle.style.display = 'none'
});
closeToggle.addEventListener('click', function () {
    navMenu.style.display = 'none';
        openToggle.style.display = 'block';
});

const options = [2, 3,3,4,5,6]

const newSet = new Set(options);


console.log(newSet.size)

newSet.forEach(a => {
    console.log(a)
})

const projects = [
    {
        name: 'Tahfidh',
        projectImgUrl: '/images/quran-quizapp-image.png',
        gitUrl: 'https://github.com/CodesByIsmail/quranquiz.github.io',
        liveUrl: 'https://quranquiz-app.vercel.app/',
        stacks: ['HTML5', 'JS', 'CSS'],
        projectInfo: 'Tahfidh is a Quran Quiz App that helps you solidify your Hifdh. You pick a Surah, set a time and test solid your Hifdh is. Memorize,take a test, know where you stand.'
    },
    
        {
        name: 'Rest Countries API',
        projectImgUrl: '/images/rest-countries-image.png',
        gitUrl: 'https://github.com/CodesByIsmail/rest-countries-api',
        liveUrl: 'https://rest-countries-api-five-alpha.vercel.app/',
        stacks: ['HTML5', 'JS', 'CSS'],
        projectInfo: 'Rest Countries API, get to know about all countries in the world. Know about their population, currency, borders and more about every countries.'
    },
    
    {
        name: 'ScreenClipo',
        projectImgUrl: '/images/screenclipo-image.png',
        gitUrl: 'https://github.com/CodesByIsmail/quranquiz.github.io',
        liveUrl: 'https://screenclipo.vercel.app/',
        stacks: ['HTML5', 'JS', 'CSS'],
        projectInfo: 'ScreenClipo is screen recorder app for PC. Capture your screen and save locally on your PC. Build, share your screen and save.'
    },
    
     {
     name: 'Dimaj Enterprise Landing Page',
     projectImgUrl: '/images/dimaj-image.jpg',
     gitUrl: 'https://github.com/CodesByIsmail/quranquiz.github.io',
     liveUrl: 'https://dimajenterprise.vercel.app/',
     stacks: ['HTML5', 'JS', 'CSS'],
     projectInfo: "Dimaj Enterprises is a health-focused business rooted in the heart of Obafemi Awolowo University, Ile-Ife. We are passionate about one simple mission — adding value to nature's raw materials and making them fit and safe for human consumption."
 }
]

const projectContainer = document.querySelector('.project__wrapper')
// <a href="${pro.gitUrl}">Code <svg width="24" height="24"><use href="/images/icons.svg#icon-github"></use></svg></a>
function render(pro) {
    // console.log(pro.stacks.map((i) => i))
    // ${pro.stacks.map((i) => `<span>${i}<span>`)}
    const markup = `
    <div class="project">
                            <img src="${pro.projectImgUrl}" alt="">
                            <div class="project__info">
                                <h2>${pro.name}</h2>
                            <p class="">
                                ${pro.projectInfo}
                            </p>
                            <div class="project__links">
                                 
                                <a href="${pro.liveUrl}">Live URL<svg width="24" height="24"><use href="/images/icons.svg#icon-live-url"></use></svg></a>
                                <a href="${pro.gitUrl}">Code<svg width="24" height="24"><use href="/images/icons.svg#icon-github"></use></svg></a>
                            </div>

                            </div>

                        </div>
    `

    projectContainer.insertAdjacentHTML('beforeend', markup)
}

projects.forEach(pro => {

    render(pro);
})

function clear(cont) {
    cont.innerHTML = ''
}

const allSkills = document.querySelectorAll('.skill')

let sec = 2;
allSkills.forEach((s, i) => {
    sec -= .1
    s.style.animation = `${sec}s floatEl infinite linear`
})


// document.querySelectorAll('.view__work__btn').forEach(b => {
//     b.addEventListener('click', (e)=>{
//         e.preventDefault()
//         document.querySelector(".projects").scrollIntoView({ behavior: "smooth" });
//     })
// })


function smoothScroll(el, target) {
    document.querySelectorAll(`.${el}`).forEach(b => {
    b.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(`.${target}`).scrollIntoView({ behavior: "smooth" });
    })
})
}

smoothScroll('view__work__btn', 'projects')
smoothScroll('about__btn', 'about')
smoothScroll('contact__btn', 'contact')