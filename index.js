// Initialize gradient canvas
var granimInstance = new Granim({
  element: '#canvas-image-blending',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ['#834d9b', '#d04ed6'],
        ['#1fa2ff', '#12d8fa'],
        ['#ff512f', '#dd2476']
      ],
      transitionSpeed: 5000
    }
  }
});

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
