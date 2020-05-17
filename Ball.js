class Ball{
    constructor(x,y,r,g,b,option){
      var options = {
         restitution: 1,
         'friction': 0.1,
         'density': 1.0,
         isStatic: option
      }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        this.r = r;
        this.g = g;
        this.b = b;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill(this.r,this.g,this.b);
        noStroke();
        ellipse(pos.x, pos.y, this.radius + 20);
    }
};