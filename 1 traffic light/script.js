function draw(){
    var canvas = document.getElementById("cnvs");
    if (canvas.getContext){
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(255,0,0)";
        ctx.fillRect(10,10,100,100);

        ctx.fillStyle = "rgb(255,255,0)";
        ctx.fillRect(10,110,100,100);

        ctx.fillStyle = "rgb(0,255,0)";
        ctx.fillRect(10,210,100,100);

        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(50,310,20,200);
    }
    else{
        alert("Your browser does not supported canvas");
    }
}
