class Box{
    constructor(x, y, width, height){
        var option = {
            restitution : 0.8,
            friction : 0.4,
            density : 1
        }
        
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        fill ("tan");
        rect(0,0,this.width,this.height);
        pop ();
    }
}