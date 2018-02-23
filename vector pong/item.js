var Item = function(img, sound, width, height, type) {

    this.position = createVector(random(canvasWidth/8, canvasWidth*7/8), random(canvasHeight/6, canvasHeight*5/6));
    this.sound = sound;
    this.image = img;
    this.width = width;
    this.height = height;
    this.radius = this.height/2;
    //type is an integer to be used for easy checks, to call the appropriate method for each item
    //could be a string (for example "tripper snipper") but the check would be too expensive
    this.type = type;
    
    this.show = function () {
        imageMode(CENTER);
        image(this.image, this.position.x, this.position.y, this.width, this.height);
    };

    //called when a player eats the tripper snipper
    //sets the boolean "frozen" to true, disabling the player's movement
    //a timeout is set for 3 seconds, after which the boolean is set back to false allowing normal movement
    this.freeze = function (player) {
        player.frozen = true;
        setTimeout(function () {
            player.frozen = false;
        }, 3000);
    };

    //called when a player smokes the winnie blue's
    //the player grows equal to his standard height value
    this.enlarge = function (player) {
        player.height += playerHeight;
    };

    //called when a player wears the stealthy fucker
    //an interval is set which changes the ball's color from white to black and vice versa
    //after 4 seconds, the interval is cleared, and the ball's color is turned back to white
    //the "player" argument is placed for convenience because the methods are called in a static way
    this.blink = function (player) {
        var interval = setInterval(function () {
            if(ball.color == "black"){
                ball.color = "white";
            }
            else{
                ball.color = "black";
            }
        }, 500);

        intervals.push(interval);

        setTimeout(function () {
            clearInterval(interval);
            ball.color = "white";
        }, 4000);
    };



};

Item.itemCheck  = function (item) {
    var player;
    if(item){
        if(ball.position.dist(item.position)<= item.radius + ball.radius){
            item.sound.play();

            //if the ball was moving towards player 1, then the player who got the item is player 2
            if(ball.velocity.x > 0){
                player = p2;

            }
            else{
                player = p1;
            }
            //depending on the "item type" integer, the appropriate response method is called
            [item.enlarge, item.blink, item.freeze][item.type-1](player);
            return null;
        }
    }
    return item;
};


Item.initializeArray = function (arr) {

    arr.push(new Item(winnieblues, fYea, 100, 100, 1));
    arr.push(new Item(stealthyFucker, sF, 100, 50, 2));
    arr.push(new Item(tripperSnipper, fuckenDruggo, 50, 80, 3));

};