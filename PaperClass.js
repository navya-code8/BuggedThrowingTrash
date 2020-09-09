class Paper{

    constructor(x,y){
        this.color = "pink";
        this.body = Bodies.ellipse(x,y,50,  {isStatic: false, restitution:0.3, friction: 0.5, density: 1.2});
        this.diameter = 50;
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        ellipseMode(radius);
        fill(this.color)
        ellipse(pos.x,pos.y, this.width, this.height);

    }
}