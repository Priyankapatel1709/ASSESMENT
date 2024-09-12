var slides = document.querySelector(".img-show");
var slideIndex = 0;
var sliderImg = document.querySelector('.active-img')
var Source = {
    src : [
    "https://wallpapercave.com/wp/wp4439474.jpg",
    "https://static5.depositphotos.com/1020804/422/i/450/depositphotos_4226091-stock-photo-juicy-pomegranate-and-its-half.jpg",
    "https://cdn.wallpapersafari.com/20/56/holkLP.jpg",
    "https://img.freepik.com/free-photo/freshness-variety-healthy-fruits-wooden-table-generated-by-artificial-intelligence_25030-65197.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-Fruits-Image-HD.jpg",
    "https://www.pngitem.com/pimgs/m/585-5851391_mango-fruits-hd-png-download.png",
    "https://c4.wallpaperflare.com/wallpaper/311/699/596/fruit-allsorts-pineapple-melon-wallpaper-preview.jpg",
    ]
}

Source.src.map(src=>{

    // Creating Img tag using create elemnent
    let ImgTag = document.createElement("img");
    ImgTag.src = src;
    console.log(ImgTag)
    slides.appendChild(ImgTag)
})
let Images = document.querySelectorAll('.img-show img')
console.log(Images)

function blur(){
    Images.forEach(img=>{
        img.style.opacity = 0.4
    })
}
blur()

let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');

// By default showing image
Images[slideIndex].style.opacity = 2;
sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`

// Next button
nextButton.addEventListener('click', ()=>{
    slideIndex++
    if (slideIndex > Images.length - 2) {
        slideIndex = 0
    }


    blur()
    Images[slideIndex].style.opacity = 2;
    sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`
})

// Prev button
prevButton.addEventListener('click', ()=>{
    slideIndex --
    if (slideIndex < 0) {
        slideIndex = Images.length - 1 
    }
    blur()
    Images[slideIndex].style.opacity = 1;
    sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`

})

Images.forEach(img=>{
    img.addEventListener('click',()=>{
        blur()
        img.style.opacity = 2;
        sliderImg.style.backgroundImage = `url(${img.src})`
    })
})
