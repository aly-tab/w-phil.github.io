var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    delay: 125
});

typewriter.typeString('Hi, my name is Will Phillips. Welcome to my site. Press start to explore.')
.start();

