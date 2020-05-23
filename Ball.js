class Ball {
    constructor(x,y,r){
   var options = {
    isStatic: true
   }
   this.body = Bodies.rectangle(x,y,r,options);
   this.x = x;
   this.r = r;
   this.y = y;
   World.add(world, this.body);
    }
   display(){
   stroke("black");
   strokeWeight(2);
   
   
   fill("black");
   ellipse(this.x,this.y,this.r * 2);
   
   }
   };