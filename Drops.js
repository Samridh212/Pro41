class Drops {
  constructor(x,y) {
    var options = {
      restitution : 0.06
    }
    this.r = 2;
    this.body = Bodies.circle(x,y,2,options);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle =this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    noStroke();
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r ,this.r);
    pop();
}
update(){
    if(this.body.position.y>height){
       Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,900)});
  }

}
}




