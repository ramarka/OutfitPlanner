
window.onload = init;

function init() {
	var canvas = document.getElementById("circleCanvas");
	var context = canvas.getContext("2d");
	var circleArray = [];


	canvas.onclick = function(){

			context.clearRect(0,0, canvas.width, canvas.height);

		
			circleArray.unshift(getPosition(event));
			circleArray[0].push(getRandomColor());

			if(circleArray.length > 1){
				for(var checkCoords = 1; checkCoords < circleArray.length; checkCoords++){
					if(determineIntersection(circleArray[0], circleArray[checkCoords])===true){
						circleArray.splice(checkCoords, 1);
						checkCoords -= 1;
					}
				}
				
			}

			circleArray.forEach(function(position){
				getCircle(position);
			})



			


	};


	function determineIntersection(arr1, arr2){


		var diffOfXs = findDiff(arr1[0], arr2[0]);
		var diffOfYs = findDiff(arr1[1], arr2[1]);
		var suaredXs = Math.pow(diffOfXs, 2);
		var squaredYs = Math.pow(diffOfYs, 2);

		if(Math.sqrt(suaredXs + squaredYs)< 60){
			return true;
		}else{
			return false;
		}
	}


	function findDiff(num1, num2){
		var diff;
		if(num1 >= num2){
			diff = num1 - num2;
		}else{
			diff = num2 - num1;
		}
		return diff;
	}




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

        //console.log(coords[0], coords[1]);

        return coords;
      }


	function getCircle(arr){

		context.fillStyle = arr[2];
		context.beginPath();
		context.arc(arr[0],arr[1],30, 0, 2 * Math.PI);
		context.fill();
		context.closePath();

	}
}




