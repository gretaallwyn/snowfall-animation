class Snow{
    constructor(x,y){
        var options = {
            'restitution':0.1,
            'friction':0.001,
        }
        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;
        
        this.snow1 = loadImage("snow4.webp");
        this.snow2 = loadImage("snow5.webp");

        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>700){
            Matter.Body.setPosition(this.body,{x:random(0,1600),y:random(0,200)})
        }
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.snow2, 0, 0, this.radius, this.radius);
        pop();
    }
}
