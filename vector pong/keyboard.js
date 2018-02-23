var Keyboard = function () {

    /**
     * checks for all possible user-based events
     */

    //LEFT = 1, DOWN = 2, RIGHT = 3, UP = 4

    //all movement is blocked if the player is frozen
    if(!p2.frozen){
        //KEY "A" moves player2 to the left
        if(keyIsDown(65)){
            p2.velocity.add(createVector(-1.5,0));
        }

        //KEY "D" moves player2 to the right
        if(keyIsDown(68)){
            p2.velocity.add(createVector(1.5,0));
        }

        //KEY "W" moves player2 upwards
        if(keyIsDown(87)){
            p2.velocity.add(createVector(0,-1.5));
        }

        //KEY "S" moves player2 downwards
        if(keyIsDown(83)){
            p2.velocity.add(createVector(0,1.5));
        }
    }


    //KEY "Q" summons player2's barrier with a height analogous to p2's energy
    if(keyIsDown(81)){
        if(p2.energy){
            p2.barrier = new Barrier(p2.energy, "purple", 2);
            p2.energy = 0;
        }
    }

    //key "E" empowers the ball's velocity, can only be used while ball is on p2's side
    if(keyIsDown(69)){
        if(p2.energy>=40 && ball.position.x < canvasWidth/2){
            ball.velocity.x = ball.velocity.x*(p2.energy+100)/100;
            p2.energy=0;
            ball.empowered = true;
            choomah1.play();
        }
    }


    //all movement is blocked if the player is frozen
    if(!p1.frozen){

        //KEY "RIGHT-ARROW" moves player1 to the right
        if(keyIsDown(RIGHT_ARROW)){
            p1.velocity.add(createVector(1.5, 0));
        }

        //KEY "DOWN-ARROW" moves player1 downwards
        if(keyIsDown(DOWN_ARROW)){
            p1.velocity.add(createVector(0, 1.5));
        }

        //KEY "UP-ARROW" moves player1 upwards
        if(keyIsDown(UP_ARROW)){
            p1.velocity.add(createVector(0, -1.5));
        }

        //KEY "LEFT-ARROW" moves player1 to the left
        if(keyIsDown(LEFT_ARROW)){
            p1.velocity.add(createVector(-1.5, 0));
        }

    }


    //KEY "L" summons player1's barrier with a width analogous to p1's energy
    if(keyIsDown(76)){
        if(p1.energy){
            p1.barrier = new Barrier(p1.energy, "green", 1);
            p1.energy = 0;
        }
    }

    //key "P" empowers the ball's velocity, can only be used while ball is on p1's side
    if(keyIsDown(80)){
        if(p1.energy>=40 && ball.position.x > canvasWidth/2){
            ball.velocity.x = ball.velocity.x*(p1.energy+100)/100;
            p1.energy = 0;
            ball.empowered = true;
            choomah1.play();
        }
    }


};
