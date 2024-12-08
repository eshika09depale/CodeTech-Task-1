// Header toggle 

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(c){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect

let typed = new Typed('.auto-input',{
    strings: ['Web Developer!','Front-End Developer!','Back End Developer!','Full Stack Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDealy: 200,
    loop: true,
})

// Active Link State On Scroll

// Get All Links 
let navlinks = document.querySelectorAll(' nav ul li a')
// Get All Sections
let Sections = document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll', function (){
    const scrollPos = window.scrollY
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            })
        }
    })
})



