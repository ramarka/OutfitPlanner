
window.onload = init;

function init() {
	var canvas = document.getElementById("circleCanvas");
	var context = canvas.getContext("2d");

	canvas.onclick = function(){

		getCircle(getRandomColor(), getPosition(event))
	};


	function getRandomColor(){
		var hexValues = '0123456789ABCDEF';
		var color = '#';
		for (var hexIndex = 0; hexIndex < 6; hexIndex++){
			var randomNum = Math.floor(Math.random() * 16);
			color += hexValues[randomNum]
		}
		return color;
	}

	function getPosition(event)
      {
      	var coords = [];
        var x;
        var y;

        if (event.x != undefined && event.y != undefined)
        {
          x = event.x;
          y = event.y;
        }
        // else // Firefox method to get the position
        // {
        //   x = event.clientX + document.body.scrollLeft +
        //       document.documentElement.scrollLeft;
        //   y = event.clientY + document.body.scrollTop +
        //       document.documentElement.scrollTop;
        // }

        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;

        coords[0] = x;
        coords[1] = y;

        console.log(coords[0], coords[1]);

        return coords;
      }


	function getCircle(color, arr){

		context.fillStyle = color;
		context.beginPath();
		context.arc(arr[0],arr[1],30, 0, 2 * Math.PI);
		context.fill();
		context.closePath();

	}
}




