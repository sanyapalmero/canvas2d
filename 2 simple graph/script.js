function draw(){
    var canvas = document.getElementById("cnvs");
    if (canvas.getContext){
        var ctx = canvas.getContext("2d");
        var width = canvas.width;//1300
        var height = canvas.height;//500

        //first number is 'x', second is 'y' => x=100px, y=100px...
        var lineCoordinates = {
            100:100,
            200:0,
            300:0,
            400:100,
            500:400,
            600:200,
            700:100,
            800:450,
            900:100,
            1000:100
        };

        //x0 y0 - start coordinates in px for creating axes
        var x0 = 10;
        var y0 = 10;

        //create axes
        ctx.beginPath();//reset path | clear start point
        ctx.moveTo(x0,y0);//set start point
        ctx.lineTo(x0, height-x0);//add y axis
        ctx.lineTo(width-y0, height-x0);//add x axis
        ctx.stroke();//create figure with stroke | draw line

        //create graph
        ctx.beginPath();//reset path again
        ctx.moveTo(10,height-10);//set point to intersection of axes
        for (var value in lineCoordinates){
            var x = x0 + Number(value);//make x value | value is string | + x0 because we have an indent of 10px to the left of the y axis
            var y = (height - Number(lineCoordinates[value]) - y0);//make y value | "height - y" for get real y value and -y0
            ctx.lineTo(x,y);//add point to this coordinates
            console.log(x,y);//check coordinates
        }
        ctx.strokeStyle = "red";//change graph color
        ctx.stroke();//draw graph
    }
    else{
        alert("Your browser does not supported canvas");
    }
}
