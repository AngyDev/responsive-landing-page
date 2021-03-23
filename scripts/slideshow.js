const usersComments = [{
    image: "./img/slider-profile-img.svg",
    name: "Darren Wilson",
    comment: "Good for scores and commentary but the team lineups have stopped working."
}, {
    image: "./img/slider-profile-img2.svg",
    name: "Michael Akinuli",
    comment: "Good for watching the goals and great for highlights instead of waiting till 10:30 before you can watch highlights on March of the day also no need of sky go"
}, {
    image: "./img/slider-profile-img3.svg",
    name: "Noah Jackson",
    comment: "I use this app every day and it's a great way to keep up to date with what's going on in football. It's a shame it won't rotate into landscape mode like its main competitor"
}, {
    image: "./img/slider-profile-img4.svg",
    name: "Sarah Udoma",
    comment: "This app has videos for other premier league teams who play and it also gives me nofications when my favourite team plays"
}];

class Slideshow {
    constructor() {
        this.slideIndex = 1;
    }

    /**
     * Creates and displays users comments section 
     */
    displayData() {

        usersComments.forEach(item => {
            var slide = document.createElement("div");
            slide.setAttribute("class", "slideshow__slide");
            var slideUser = document.createElement("div");
            slideUser.setAttribute("class", "slide__user flex flex-row justify-between align-center");
            slide.appendChild(slideUser);

            var userImg = document.createElement("span");
            userImg.setAttribute("id", "user-img");
            userImg.innerHTML = '<img src="' + item.image + '" alt="Profile image"/>';
            slideUser.appendChild(userImg);

            var userName = document.createElement("span");
            userName.setAttribute("id", "user-name");
            userName.innerHTML = item.name;
            slideUser.appendChild(userName);

            var twitter = document.createElement("img");
            twitter.setAttribute("src", "img/twitter.svg");
            slideUser.appendChild(twitter);

            var slideUserComment = document.createElement("div");
            slideUserComment.setAttribute("class", "user-comment");
            slideUserComment.setAttribute("id", "user-commnet");
            var textComment = document.createTextNode(item.comment);
            slideUserComment.appendChild(textComment);
            slide.appendChild(slideUserComment);

            document.getElementById("slideshow-wrapper").appendChild(slide);
        });
    }

    /**
     * Creates and displays the dots for the slideshow
     */
    displayDot() {
        usersComments.forEach((item, index) => {
            var dot = document.createElement("button");
            dot.setAttribute("name", "dot");
            dot.setAttribute("class", "dot");
            dot.setAttribute("aria-label", "Dot Button");
            dot.setAttribute("id", index + 1);

            document.getElementById("dot-container").appendChild(dot);
        });
        this.showSlides(this.slideIndex);
    }

    /**
     * Set the current slide
     * @param {Number} buttonId The id of the current slider
     */
    currSlide(buttonId) {
        this.showSlides(this.slideIndex = parseInt(buttonId));
    }

    /**
     * Shows the slides
     * @param {Number} n  
     */
    showSlides(n) {
        console.log(n);
        var slides = document.getElementsByClassName("slideshow__slide");
        var dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.slideIndex = slides.length
        }

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
    }

    plusSlides(n) {
        console.log("plus");
        console.log(this.slideIndex);
        console.log(n);
        this.showSlides(this.slideIndex += n);
    }
}

const dotButton = document.getElementsByName("dot");
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

var slideshow = new Slideshow();
slideshow.displayData();
slideshow.displayDot();

dotButton.forEach(button => {
    button.addEventListener('click', () => {
        slideshow.currSlide(button.id);
    })
});

nextButton.addEventListener('click', () => {
    slideshow.plusSlides(1);
});
prevButton.addEventListener('click', () => {
    slideshow.plusSlides(-1);
});