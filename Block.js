class Block {

constructor(x,y){

var options={'restitution': 0 ,'isStatic':false}

this.body=Bodies.rectangle(x,y,50,50,options)

this.Visibility=255;



World.add(world,this.body)
}
display(){
    
        
            if(this.body.speed < 3){
                var angle = this.body.angle;

                push();
                translate(this.body.position.x, this.body.position.y);
                rotate(angle);
                rectMode(CENTER)

                fill("red");
                rect(0,0,50,50)
                pop();
                
                
                }
        
        else{
        
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility - 5;
            console.log(this.Visibility)
           
            
            pop();
               }
        
}




}
       





