class gameobject{
    //This gets called when we do new gameobj
    //pass in the canvas subject
    constructor(canvas)
    {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        //velocity
        this.vx = 0;
        this.vy = 0;
        this.color = "blue"
        this.canvas
    }

    //Renders the object on the screen
    renderRect()
    {
        ctx.filLStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }


    //moves object
    move()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
}