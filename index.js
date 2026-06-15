const app = document.getElementById('app');

if (app && window.Typewriter) {
  const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });

  typewriter
    .pauseFor(1000)
    .typeString('I am a phone repairman and content creator from the United Kingdom.')
    .pauseFor(3000)
    .start();
}

if (window.Granim && document.getElementById('canvas-image-blending')) {
  new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image: {
      source: 'assets/snow.jpg',
      blendingMode: 'multiply',
    },
    states: {
      'default-state': {
        gradients: [
          ['#29323c', '#485563'],
          ['#FF6B6B', '#556270'],
          ['#80d3fe', '#7ea0c4'],
          ['#f0ab51', '#eceba3'],
        ],
        transitionSpeed: 8000,
      },
    },
  });
}

function setupModal(buttonId, modalId, closeClass) {
  const button = document.getElementById(buttonId);
  const modal = document.getElementById(modalId);
  const closeButton = document.getElementsByClassName(closeClass)[0];

  if (!button || !modal || !closeButton) {
    return;
  }

  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function setupExternalLink(buttonId, url) {
  const button = document.getElementById(buttonId);

  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

[
  ['btn1', 'modal1', 'closeModal1'],
  ['btn2', 'modal2', 'closeModal2'],
  ['btn4', 'modal4', 'closeModal4'],
  ['btn5', 'modal5', 'closeModal5'],
  ['hobbyBtn1', 'modalHobby1', 'closeModalHobby1'],
  ['hobbyBtn2', 'modalHobby2', 'closeModalHobby2'],
  ['hobbyBtn3', 'modalHobby3', 'closeModalHobby3'],
  ['hobbyBtn4', 'modalHobby4', 'closeModalHobby4'],
  ['hobbyBtn5', 'modalHobby5', 'closeModalHobby5'],
  ['hobbyBtn6', 'modalHobby6', 'closeModalHobby6'],
].forEach(([buttonId, modalId, closeClass]) => {
  setupModal(buttonId, modalId, closeClass);
});

setupExternalLink('btn3', 'https://discord.gg/ydavdwtYjy');
setupExternalLink('btn6', 'https://www.youtube.com/@Lu5w');
