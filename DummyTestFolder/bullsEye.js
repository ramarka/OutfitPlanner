
var sliderModule = (function(win, doc) {

    win.onload = init;

    // canvas and context variables
    var canvas;
    var context;

    // center of the pattern
    var centerX, centerY;


    function init() {
        
            canvas = doc.getElementById("bullsEyeCanvas");
            context = canvas.getContext("2d");

            centerX = canvas.width / 2;
            centerY = canvas.height / 2;
            
            // draw the initial pattern
            drawPattern();

    }



    function currentBandwidth(val){
        document.getElementById("bandwidthValue").value=val;
    }


    // called whenever the slider value changes
    function drawPattern() {
        // clear the drawing area
        context.clearRect(0, 0, canvas.width, canvas.height);

        // get the current radius
        var bandwidth = doc.getElementById("bandwidth").value;



        currentBandwidth(bandwidth);



    
        var radius = 200
        var red = "#FF0000";
        var blue = "#0000FF";


        

        context.fillStyle = red;
        context.beginPath();
        context.arc(200, 200, radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
       

        while(radius != 0){
            var step = radius - bandwidth;
            console.log("RADIUS:", radius);
            console.log("STEP:", step)

        context.fillStyle = red;
        context.beginPath();
        context.arc(200, 200, radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath();

        context.fillStyle = blue;
        context.beginPath();
        context.arc(200, 200, step, 0, 2 * Math.PI);
        context.fill();
        context.closePath();

        

        radius -= bandwidth * 2;

         }



    }

    return {
        drawPattern: drawPattern
    };

})(window, document);




