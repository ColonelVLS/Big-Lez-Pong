var Friction = function (velocity) {

    //friction is a unit vector, negative with respect to velocity,
    //and acts as a negative acceleration to the object.
    //should be applied in the main loop, and for every frame.
     return createVector(-velocity.x/10, -velocity.y/10);

};
