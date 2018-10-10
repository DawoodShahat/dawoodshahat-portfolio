window.onload = () => {
    let togglerButton = document.querySelector('.toggler-icon');
    let navBar = document.getElementById('navbar');

    togglerButton.addEventListener('click', (event) => {
        navBar.classList.toggle('show');
    });

    window.onscroll = (event) => {
        let header = document.getElementById('header');
        let navBar = document.querySelectorAll('.nav-link');

        if(window.innerWidth > 768){
            if(window.scrollY >= 100){
                header.style.background = '#fff'
                header.style.color = '#000'

                navBar.forEach( navItem => {
                    navItem.style.color = '#000';
                });
            }else if (window.scrollY < 100){
                header.style.background = 'transparent'
                header.style.color = '#fff'

                navBar.forEach( navItem => {
                    navItem.style.color = '#fff';
                });
            }
        }
    }
}
