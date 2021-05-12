class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 30
        }
        this.pointB=pointB;
        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){

        
    push();
        strokeWeight(5)
    stroke("Maroon");
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
    pop();
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
    }
    
