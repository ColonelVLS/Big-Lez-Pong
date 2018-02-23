function Barrier(energy, color, side){

    this.side = side;
    this.height = canvasHeight * energy / 100 ;
    this.width = 20;
    this.position = createVector(this.side == 1? canvasWidth - 20 : 0, (canvasHeight- this.height)/2);
    this.color = color;



    this.show = function(){
        fill(this.color);
        rect(this.position.x, this.position.y, this.width, this.height);
    }
}
