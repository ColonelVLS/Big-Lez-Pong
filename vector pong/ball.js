var Ball = function (position, radius) {

    this.position = position;
    this.radius = radius;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.empowered = false;
    this.color = "white";


    this.show = function () {
        fill(this.color);
        noStroke();
        ellipse(this.position.x, this.position.y, this.radius, this.radius);

        if(this.empowered){
            imageMode(CENTER);
            image(choomah, this.position.x, this.position.y, 2*this.radius, 2*this.radius);
        }
    };

    this.move = function () {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);

        //vertical out-of-bounds check
        if(this.position.y + this.radius > canvasHeight){
            this.position.y = canvasHeight - this.radius;
            this.velocity.y *= -1;
        }
        else if(this.position.y - this.radius < 0){
            this.position.y = this.radius;
            this.velocity.y *= -1;
        }
    }
};
