$(function () {
    $('.slider').slick(
        {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dotts: false,
            variableWidth: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,

                    }
                }
            ]
        }
    )
})

$("#arrow-prev").on("click", function (event) {
    $('.slider').slick('slickPrev');
});

$("#arrow-next").on("click", function (event) {
    $('.slider').slick('slickNext');
});



document.getElementById('more__news').onclick = function showIt() {
    document.getElementById('news__hidden').style.display = 'block';
    document.getElementById('more__news').style.display = 'none';
    document.getElementById('close__news').style.display = 'block';
}


document.getElementById('close__news').onclick = function hiddenIt() {
    document.getElementById('news__hidden').style.display = 'none';
    document.getElementById('more__news').style.display = 'block';
    document.getElementById('close__news').style.display = 'none';
}


// modal

document.getElementById('modal_open').onclick = function showModal() {
    document.getElementById('modal').style.display = 'block';

}

document.getElementById('btn__close-modal').onclick = function hiddenModal() {
    document.getElementById('modal').style.display = 'none';

}

// modal-description


document.getElementById('modal-description-open').onclick = function showModal() {
    document.getElementById('modal-description').style.display = 'block';

}

document.getElementById('btn__close-modal-description').onclick = function hiddenModal() {
    document.getElementById('modal-description').style.display = 'none';

}

// modal-map


document.getElementById('modal-map-open').onclick = function showModal() {
    document.getElementById('modal-map').style.display = 'block';

}

document.getElementById('btn__close-map').onclick = function hiddenModal() {
    document.getElementById('modal-map').style.display = 'none';

}


//burger menu

let burgerIcon = document.getElementById("burger-icon-main")


function closeBurger() {
    document.getElementById('menu-visible').style.display = 'none';
    document.getElementById('burger-menu').style.display = 'none';
    document.body.style.overflow = "";
    document.body.style.position = "";

}


document.getElementById('burger-icon-main').onclick = function burgerMenu() {
    document.getElementById('menu-visible').style.display = 'block';
    document.getElementById('burger-menu').style.display = 'block';
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    let menuItems = document.querySelectorAll('.menu__item')
    menuItems.forEach((el) => {
        el.addEventListener("click", () => {
            closeBurger()
        })
    })
}


document.getElementById('burger-icon-close').onclick = function burgerMenuClose() {
    closeBurger()
}
