function preload() {
}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO)
    video.hide();

}

function draw() {
    image(video, 150, 80, 400, 350);
    fill(128, 0, 0);
    stroke(245,197,44);
    circle(40,40,70);
    circle(600,40,70);
    circle(40,440,70);
    circle(600,440,70);

    fill(245,197,44);
    rect(75,440, 490, 15);
    rect(75,35, 490, 15);
    rect(30,75, 15, 330);
    rect(590,75, 15, 330);

}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}