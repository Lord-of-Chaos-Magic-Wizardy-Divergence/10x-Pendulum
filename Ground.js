class Ground{
    constructor(){
      var options = {
         'friction': 0.1,
         'density': 1.0,
         isStatic:true
      }
        this.body = Bodies.rectangle(975,960,1950,10,options);
        this.width = 1950;
        this.height = 10;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("maroon");
        rect(pos.x, pos.y, this.width,this.height);
    }
};