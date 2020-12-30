class Racks {
    constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.RackWidth=200;
		this.RackHeight=100;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.RackWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.RackWidth/2, this.y-this.RackHeight/2, this.wallThickness, this.RackHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.RackWidth/2, this.y-this.RackHeight/2, this.wallThickness, this.RackHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(World, this.bottomBody)
		World.add(World, this.leftWallBody)
		World.add(World, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill("red")
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.RackHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill("red")
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.RackHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill("red")
			rect(0,0,this.RackWidth, this.wallThickness);
			pop()
			
	}

}

    

