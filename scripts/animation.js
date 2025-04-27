document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: [
            "Remote Sensing",
            "Data Visualization",
            "GIS programming",
            "Web Development",
            "Geospatial Analysis",
            "Data Science "
        ],
        typeSpeed: 50, // Speed of typing in milliseconds
        backSpeed: 25,  // Speed of backspacing in milliseconds
        backDelay: 1000, // Delay before starting backspacing
        startDelay: 500, // Delay before typing starts
        loop: true // Whether to loop the animation
    };

    var typed = new Typed('#typed-output', options);
});
