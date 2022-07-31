// Start Header
document.querySelector(".formHeader #search").onclick = () => {
    document.querySelector(".formHeader #search").classList.toggle("active");
    if(document.querySelector(".formHeader #search").classList.contains("active")){
        document.querySelector(".formHeader input").style.width = "250px";
        document.querySelector(".formHeader input").style.opacity = "1";
    }else {
        document.querySelector(".formHeader input").style.width = "0";
        document.querySelector(".formHeader input").style.opacity = "0";
    }
}

document.querySelector(".mode").onclick = () => {
    document.body.classList.toggle("darkMode");
}
document.querySelector(".resMode").onclick = () => {
    document.body.classList.toggle("darkMode");
}

let aboveContentResLang = document.querySelector(".aboveContentResLang");

document.querySelector(".resLang").onclick = () => {
    aboveContentResLang.style.display = "block";
}
document.querySelector('.cancelResLang').onclick = ()=> {
    aboveContentResLang.style.display = "none";
}



putActive(".headerLang");

putActive(".resNews");

putActive(".resMore");

putActive(".resTouch");
// End Header

// Start Tags and Others
document.querySelector(".hAndClose a").onclick = () => {
    document.querySelector(".attentionMsg").remove();
}
// End Tags and Others

// Start News Slider
let nextNews = document.querySelector(".nextNews");
let prevNews = document.querySelector(".prevNews");

const allSlides = document.querySelectorAll(".slideFullNews");

let lengthSlides = allSlides.length;

let currentSlideNews = 1;

prevNews.onclick = ()=> {
    if(currentSlideNews === 1){
        currentSlideNews = lengthSlides;
        checkSlide();
    }else {
        currentSlideNews--;
        checkSlide();
    }
};

let myVar = setInterval(()=> {
    if(currentSlideNews === lengthSlides){
        currentSlideNews = 1;
        checkSlide();
    }else {
        currentSlideNews++;
        checkSlide();
    }
}, 10000);


nextNews.onclick = ()=> {
    if(currentSlideNews === lengthSlides){
        currentSlideNews = 1;
        checkSlide();
    }else {
        currentSlideNews++;
        checkSlide();
    }
};


function checkSlide() {
    allSlides.forEach((img)=> {
        img.classList.remove("active");
    });

    allSlides[currentSlideNews - 1].classList.add("active");
}
// End News Slider

// start Sides for User
let changeNewsLi = document.querySelectorAll(".chooseToChangeNewsUl li");

changeNewsLi.forEach(li=> {
    li.addEventListener('click', ()=>{
        changeNewsLi.forEach(li=>{
            li.classList.remove("active");
        })
        li.classList.add("active");
    })
})

if(changeNewsLi[1].classList.contains("active")){
    document.querySelector(".eyeSlidesChoice").style.display = 'flex';
    document.querySelector(".chatSlidesChoiceUser").style.display = 'none';
}

changeNewsLi[1].onclick = ()=>{
    document.querySelector(".eyeSlidesChoice").style.display = 'flex';
    document.querySelector(".chatSlidesChoiceUser").style.display = 'none';
}
changeNewsLi[0].onclick = ()=>{
    document.querySelector(".eyeSlidesChoice").style.display = 'none';
    document.querySelector(".chatSlidesChoiceUser").style.display = 'flex';
}
// end Sides for User






function putActive(element){
    document.querySelector(element).onclick = () => {
        document.querySelector(element).classList.toggle("active");
    }
}