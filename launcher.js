class Launcher{
constructor(bodyA, pointB){
var options = {
  bodyA: bodyA,
  pointB: pointB,
  stiffness: 0.04,
  length: 10,  
}

this.launcher = Constraint.create(options)
World.add(world,this.launcher)
}
display(){


  if(this.launcher.bodyA){
    var pointA = this.launcher.bodyA.position;
    var pointB = this.launcher.pointB;
    push();
    stroke(48,22,8);
    if(pointA.x<220){
      strokeWeight(7);
      line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
     
    }else{
      strokeWeight(3);
    line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
  
    }
    
    pop();
  }


}
fly(){
  this.launcher.bodyA = null;
}
}
