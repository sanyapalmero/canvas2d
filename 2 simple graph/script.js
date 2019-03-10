function draw(){
    var canvas = document.getElementById("cnvs");
    if (canvas.getContext){
        var ctx = canvas.getContext("2d");
        var width = canvas.width;//1300
        var height = canvas.height;//500

        var yCoordinates = [100,0,0,100,400,200,100,450,100,100];//y values
        var stepX = 100;//x values => 0,100,200...

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
        for (var i=0; i<yCoordinates.length; i++){
            var x = x0 + (stepX * (i + 1));//make x value
            var y = height - yCoordinates[i] - y0;//make y value
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
