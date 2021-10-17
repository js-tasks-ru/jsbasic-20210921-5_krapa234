function initCarousel() {
    let carusel = document.querySelector('.carousel__inner');
    let arrowRight = document.querySelector('.carousel__arrow_right');
    let arrowLeft = document.querySelector('.carousel__arrow_left');
    let caruselImage = document.querySelectorAll('div.carousel__slide');
    let caruselImageNumber = caruselImage.length;
    let caruselImageWidth = document.querySelector('.carousel__slide').offsetWidth;
    let position = 0;


    arrow(position);

    arrowRight.addEventListener("click", function() {

        let imagesLeft = caruselImageNumber - (Math.abs(position) + caruselImageWidth) / caruselImageWidth;
        position -= imagesLeft >= 1 ? caruselImageWidth : imagesLeft * caruselImageWidth;

        carusel.style.transform = `translateX(${position}px)`;
        arrow();
    });

    arrowLeft.addEventListener("click", function() {

        let imagesLeft = Math.abs(position) / caruselImageWidth;
        position += imagesLeft >= 1 ? caruselImageWidth : imagesLeft * caruselImageWidth;

        carusel.style.transform = `translateX(${position}px)`;
        arrow();
    });

    function arrow() {
        if (position <= -(caruselImageNumber - 1) * caruselImageWidth) {
            arrowRight.style.display = 'none';
        } else { arrowRight.style.display = ''; }
        if (position === 0) {
            arrowLeft.style.display = 'none';
        } else { arrowLeft.style.display = ''; }
    }
}
