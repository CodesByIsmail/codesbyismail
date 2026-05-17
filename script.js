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
        name: 'Quran Quiz App',
        projectImgUrl: '/images/quran-quizapp-image.png',
        gitUrl: 'https://github.com/CodesByIsmail/quranquiz.github.io',
        liveUrl: 'https://quranquiz-app.vercel.app/',
        projectInfo: ''
    },
    
        {
        name: 'Rest Countries API',
        projectImgUrl: '/images/rest-countries-image.png',
        gitUrl: 'https://github.com/CodesByIsmail/rest-countries-api',
        liveUrl: 'https://rest-countries-api-five-alpha.vercel.app/',
        projectInfo: ''
    },
]

const projectContainer = document.querySelector('.project__wrapper')

function render(pro) {
    const markup = `
    <div class="project">
                            <img src="${pro.projectImgUrl}" alt="">
                            <div class="project__info">
                                <h2>${pro.name}</h2>
                            <p class="">
                                ${pro.projectInfo}
                            </p>
                            <div class="project__links">
                                 <a href="${pro.gitUrl}">Code <svg width="24" height="24"><use href="/images/icons.svg#icon-github"></use></svg></a
                                 >
                                <a href="${pro.liveUrl}">Live URL<svg width="24" height="24"><use href="/images/icons.svg#icon-live-url"></use></svg></a>
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