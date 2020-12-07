class bin{
    constructor(x,y,w,h,a){
        var opt={
            isStatic: true,
            friction: 0.5,
            restitution: 0.5,
            density:2.0
        }
        this.w=w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h-80,opt);
        this.image = loadImage("dustbingreen.png");
        Matter.Body.setAngle(this.body,a);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}