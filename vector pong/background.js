function Background(){

    strokeWeight(1);
    stroke(100);        // field
    line(canvasWidth/2, 0,canvasWidth/2, canvasHeight);
    fill(0);
    ellipse(canvasWidth/2, canvasHeight/2, 200);
    ellipse(canvasWidth/2, canvasHeight/2, 2);

    textSize(60);       // Score
    fill(100);
    textAlign(CENTER);
    text(score2 + "-" + score1, canvasWidth/2, canvasHeight/10);

    textSize(20);         //energy
    text(p2.energy + "/100", 260, 35);
    text(p1.energy + "/100", canvasWidth - 260, 35);

}
