class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(400,390,800,20,options);
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("brown");
      rect(this.ground.position.x,this.ground.position.y,800,20);
    }
  };