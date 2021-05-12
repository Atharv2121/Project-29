class Polygon {
    constructor(x, y,r) {
      var options = {
          'restitution':.8,
          'friction':1.0,
          'density':3,
      }
      this.image=loadImage("polygon.png");
      this.body = Bodies.circle(x, y,r, options);
      this.r=r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.r+50, this.r+50 );
      pop();
    }
}