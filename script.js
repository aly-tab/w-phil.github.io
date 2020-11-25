var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    delay: 125
});

typewriter.typeString('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis efficitur nibh.')
.start();

