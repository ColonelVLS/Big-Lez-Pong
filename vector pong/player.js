function Player(position, width, height, color, number){

    this.position = position; //is a vector
    this.number = number;
    this.width = width;
    this.height = height;
    this.color = color;
    this.energy = 0;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.barrier = null;
    this.frozen = false;

    this.energyBarX = this.number == 1? canvasWidth - 220 : 20;
    this.energyBarY = 20;

    // Show function displays everything related to the specific player:
    //Bat, Energy Bar, Barrier etc.

    this.show = function () {
        //drawing barrier
        if(this.barrier){
            this.barrier.show();
        }

        //drawing energy bar
        fill(100);
        rect(this.energyBarX, this.energyBarY, 200, 15);
        fill(this.color);
        rect(this.energyBarX, this.energyBarY, this.energy*2, 15);

        //drawing the bat
        noStroke();
        fill(color);
        rect(this.position.x, this.position.y, this.width, this.height);
    };

    this.move = function () {
        //only move character when not frozen
        if(!this.frozen){

            this.acceleration = Friction(this.velocity);
            //adding velocity to position
            this.position.add(this.velocity);
            //adding acceleration to velocity
            this.velocity.add(this.acceleration);


            //doing out-of-bounds check
            //horizontal check:
            //player 1 left side of the canvas:
            if(this.number == 2){
                if(this.position.x < 0){
                    this.position.x = 0;
                    this.velocity.x = 0;
                }
                else if(this.position.x + this.width > canvasWidth/2){
                    this.position.x = canvasWidth/2 - this.width;
                    this.velocity.x = 0;
                }
            }
            //player 2 right side of the canvas:
            else{
                if(this.position.x + this.width > canvasWidth){
                    this.position.x = canvasWidth - this.width;
                    this.velocity.x = 0;
                }
                else if(this.position.x < canvasWidth/2){
                    this.position.x = canvasWidth/2;
                    this.velocity.x = 0;
                }
            }
            //vertical check:
            //same for both players
            if(this.position.y < 0){
                this.position.y = 0;
            }
            else if(this.position.y + this.height > canvasHeight){
                this.position.y = canvasHeight - this.height;
            }

        }

    };

    
}
