const usersComments = [{
    id: 1,
    image: "./img/slider-profile-img.svg",
    name: "Darren Wilson",
    comment: "Good for scores and commentary but the team lineups have stopped working."
}, {
    id: 2,
    image: "./img/slider-profile-img2.svg",
    name: "Michael Akinuli",
    comment: "Good for watching the goals and great for highlights instead of waiting till 10:30 before you can watch highlights on March of the day also no need of sky go"
}, {
    id: 3,
    image: "./img/slider-profile-img3.svg",
    name: "Noah Jackson",
    comment: "I use this app every day and it's a great way to keep up to date with what's going on in football. It's a shame it won't rotate into landscape mode like its main competitor"
}];

class Slideshow {

}

const userImg = document.getElementById("user-img");
const userName = document.getElementById("user-name");
const userComment = document.getElementById("user-comment");

userImg.innerHTML = '<img src="' + usersComments[0].image + '"/>';
userName.innerHTML = usersComments[0].name;
userComment.innerHTML = usersComments[0].comment;

/*
<div class="slideshow__slide">
    <div class="slide__user flex flex-row justify-between align-center">
        <span id="user-img"></span>
        <span id="user-name"></span>
        <img src="img/twitter.svg" alt="Twitter">
    </div>
    <div class="user-comment" id="user-comment"></div>
</div>
*/