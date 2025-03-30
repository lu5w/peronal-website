document.addEventListener('DOMContentLoaded', function() {
    // Get all modal elements
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    const modal4 = document.getElementById('modal4');
    const modal5 = document.getElementById('modal5');
    const modalHobby1 = document.getElementById('modalHobby1');
    const modalHobby2 = document.getElementById('modalHobby2');
    const modalHobby3 = document.getElementById('modalHobby3');
    const modalHobby4 = document.getElementById('modalHobby4');
    const modalHobby5 = document.getElementById('modalHobby5');
    const modalHobby6 = document.getElementById('modalHobby6');

    // Get all button elements that open modals
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');
    const btn6 = document.getElementById('btn6');
    const hobbyBtn1 = document.getElementById('hobbyBtn1');
    const hobbyBtn2 = document.getElementById('hobbyBtn2');
    const hobbyBtn3 = document.getElementById('hobbyBtn3');
    const hobbyBtn4 = document.getElementById('hobbyBtn4');
    const hobbyBtn5 = document.getElementById('hobbyBtn5');
    const hobbyBtn6 = document.getElementById('hobbyBtn6');

    // Get all close button elements
    const closeModal1 = document.getElementsByClassName('closeModal1')[0];
    const closeModal2 = document.getElementsByClassName('closeModal2')[0];
    const closeModal4 = document.getElementsByClassName('closeModal4')[0];
    const closeModal5 = document.getElementsByClassName('closeModal5')[0];
    const closeModalHobby1 = document.getElementsByClassName('closeModalHobby1')[0];
    const closeModalHobby2 = document.getElementsByClassName('closeModalHobby2')[0];
    const closeModalHobby3 = document.getElementsByClassName('closeModalHobby3')[0];
    const closeModalHobby4 = document.getElementsByClassName('closeModalHobby4')[0];
    const closeModalHobby5 = document.getElementsByClassName('closeModalHobby5')[0];
    const closeModalHobby6 = document.getElementsByClassName('closeModalHobby6')[0];

    // When the user clicks on a button, open the corresponding modal
    btn1.onclick = function() {
        modal1.style.display = "block";
    }

    btn2.onclick = function() {
        modal2.style.display = "block";
    }

    btn3.onclick = function() {
        window.open('https://discord.gg/YOUR_DISCORD_LINK', '_blank');
    }

    btn4.onclick = function() {
        modal4.style.display = "block";
    }

    btn5.onclick = function() {
        modal5.style.display = "block";
    }

    btn6.onclick = function() {
        window.open('https://youtube.com/YOUR_YOUTUBE_CHANNEL', '_blank');
    }

    hobbyBtn1.onclick = function() {
        modalHobby1.style.display = "block";
    }

    hobbyBtn2.onclick = function() {
        modalHobby2.style.display = "block";
    }

    hobbyBtn3.onclick = function() {
        modalHobby3.style.display = "block";
    }

    hobbyBtn4.onclick = function() {
        modalHobby4.style.display = "block";
    }

    hobbyBtn5.onclick = function() {
        modalHobby5.style.display = "block";
    }

    hobbyBtn6.onclick = function() {
        modalHobby6.style.display = "block";
    }

    // When the user clicks on a close button, close the modal
    closeModal1.onclick = function() {
        modal1.style.display = "none";
    }

    closeModal2.onclick = function() {
        modal2.style.display = "none";
    }

    closeModal4.onclick = function() {
        modal4.style.display = "none";
    }

    closeModal5.onclick = function() {
        modal5.style.display = "none";
    }

    closeModalHobby1.onclick = function() {
        modalHobby1.style.display = "none";
    }

    closeModalHobby2.onclick = function() {
        modalHobby2.style.display = "none";
    }

    closeModalHobby3.onclick = function() {
        modalHobby3.style.display = "none";
    }

    closeModalHobby4.onclick = function() {
        modalHobby4.style.display = "none";
    }

    closeModalHobby5.onclick = function() {
        modalHobby5.style.display = "none";
    }

    closeModalHobby6.onclick = function() {
        modalHobby6.style.display = "none";
    }

    // When the user clicks anywhere outside of a modal, close it
    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
        if (event.target == modal4) {
            modal4.style.display = "none";
        }
        if (event.target == modal5) {
            modal5.style.display = "none";
        }
        if (event.target == modalHobby1) {
            modalHobby1.style.display = "none";
        }
        if (event.target == modalHobby2) {
            modalHobby2.style.display = "none";
        }
        if (event.target == modalHobby3) {
            modalHobby3.style.display = "none";
        }
        if (event.target == modalHobby4) {
            modalHobby4.style.display = "none";
        }
        if (event.target == modalHobby5) {
            modalHobby5.style.display = "none";
        }
        if (event.target == modalHobby6) {
            modalHobby6.style.display = "none";
        }
    }

    // Typewriter effect
    const app = document.getElementById('app');
    const typewriter = new Typewriter(app, {
        loop: true,
        delay: 75,
    });
    
    typewriter
        .typeString('I am an IT Professional')
        .pauseFor(1000)
        .deleteAll()
        .typeString('I specialize in Phone Repairs')
        .pauseFor(1000)
        .deleteAll()
        .typeString('I love Technology')
        .pauseFor(1000)
        .deleteAll()
        .start();
});
