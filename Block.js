class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':4,
        'density':2,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  displayYellow(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();
  }
  displayGreen(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("Green");
    rect(0, 0, this.width, this.height);
    pop();
  }
  displayBlue(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("blue");
    rect(0, 0, this.width, this.height);
    pop();
  }
  displayRed(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("Red");
    rect(0, 0, this.width, this.height);
    pop();
  }
  
  
}
