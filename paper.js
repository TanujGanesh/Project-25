class Paper{
    constructor(x,y,rd){
        var opt={
           isStatic:false, 
           restitution:0.1,
           friction:0.5,
           density:1.2
        }
        
        this.rd = rd;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x,y,rd,opt);
        this.image=loadImage("paper.png");
        World.add(world,this.body);   
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.rd+30,this.rd+30);
        pop();
    }
}