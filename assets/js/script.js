let OnEvent = (document) => {
    return {
        on: (event, className, callback) => {
            document.addEventListener('click', (event)=>{
                if(!event.target.classList.contains(className)) return;
                callback.call(event.target, event);
            }, false);
        }
    }
};

let likelist = document.querySelectorAll(".img-normal-like");
likelist.forEach(element => {
    element.addEventListener('click', () => element.classList.toggle("blog-liked-heart"));   
});

OnEvent(document).on('click', 'card', function (e) {     
    const addCheckedWrapper = document.getElementById(this.id);
    addCheckedWrapper.children[1].children[0].style.display = "inline-block";
    addCheckedWrapper.children[0].children[1].style.display = "inline-block";      
});

let deleteElement = document.querySelectorAll(".close-button");
deleteElement.forEach(element => {
    element.addEventListener('click', deleteNews, false);
});

function deleteNews(event) {
    var cardID = event.currentTarget.parentNode.parentNode.id;
    document.getElementById(cardID).remove();
}

function hamburgerMenu() {
    var x = document.getElementById("myTopnav");

    if (x.className === "main-menu") {
      x.className += " responsive";
    } else {
      x.className = "main-menu";
    }
  }




