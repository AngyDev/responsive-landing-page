/**
 * Class Slideshow
 */
class Slideshow {
    constructor() {
        this.slideIndex = 1;
        this.usersComments = [];
        this.getData();
    }

    /**
     * Gets data from API
     */
    async getData() {
        try {
            const response = await fetch('https://605a21feb11aba001745da26.mockapi.io/api/v1/comment');

            if (response.status != 200) {
                var responseError = 'Something is wrong! Status Code: ' + response.status;
                this.displayError(responseError);
            }

            this.usersComments = await response.json();

            if (this.usersComments.length > 0) {
                this.displayData();
                this.displayDot();
            } else {
                let div = document.createElement("div");
                div.innerHTML = "The response is empty";

                document.getElementById("slideshow-wrapper").appendChild(div);
            }

        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Shows the error on the page
     * @param {String} error response error string
     */
    displayError(error) {

        let div = document.createElement("div");
        div.innerHTML = error;

        document.getElementById("slideshow-wrapper").appendChild(div);
    }

    /**
     * Creates and displays users comments section 
     */
    displayData() {

        this.usersComments.forEach(item => {
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
            twitter.setAttribute("alt", "Twitter");
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
        this.usersComments.forEach((item, index) => {
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

    /**
     * Change the slide with prev or next button
     * @param {Number} n 
     */
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
}

const dotButton = document.getElementsByName("dot");
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

var slideshow = new Slideshow();

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