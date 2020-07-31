class Circle {
    constructor(x,y,radius,speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
    }

    draw(canvas){
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }

    move(){
        this.y += this.speed;
    }
}
