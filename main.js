canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

racecar1_width = 100;
racecar1_height = 50;


racecar2_width = 90;
racecar2_height = 50;


racecar1_x = 10;
racecar1_y = 10;



racecar2_x = 10;
racecar2_y = 100;



racecar1_image = "main car.png";
racecar2_image = "third main.png";
background_image ="track.JPG";


function add() {
    background_imgtag = new Image();
    background_imgtag.onload = upload_background;
    background_imgtag.src = background_image;

    racecar1_imgtag = new Image();
    racecar1_imgtag.onload = upload_racecar1();
    racecar1_imgtag.src = racecar1_image;

    racecar2_imgtag = new Image();
    racecar2_imgtag.onload = upload_racecar2();
    racecar2_imgtag.src = racecar2_image;
}









function upload_background() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}





function upload_racecar1() {
    ctx.drawImage(racecar1_imgtag, racecar1_x, racecar1_y, racecar1_width, racecar1_height);
}


function upload_racecar2() {
    ctx.drawImage(racecar2_imgtag, racecar2_x, racecar2_y, racecar2_width, racecar2_height);
}








window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    key_pressed = e.keyCode;
    if (key_pressed == '37') {
        console.log("left");
        left();


    }

    if (key_pressed == '38') {
        console.log("up");
        up();

    }

    if (key_pressed == '39') {
        console.log("right");
        right();

    }

    if (key_pressed == '40') {
        console.log("down");
        down();

    }


    if (key_pressed == '83') {
        console.log("down s");
        down1();

    }


    
    if (key_pressed == '87') {
        console.log("up w");
        up1();

    }

    
    if (key_pressed == '65') {
        console.log("left a");
        left1();

    }

    
    if (key_pressed == '68') {
        console.log("right d");
        right1();

    }

}

function up() {

    if (racecar1_y >= 0) {
        racecar1_y = racecar1_y - 10;
        console.log("when up arrow is pressed x = " + racecar1_x + ", y = " + racecar1_y);
        upload_background();
        upload_racecar1();
        upload_racecar2();
    }
}

function down() {

    if (racecar1_y <= 300) {
        racecar1_y = racecar1_y + 10;
        console.log("when down arrow is pressed x = " + racecar1_x + ", y = " + racecar1_y);
        upload_background();
        upload_racecar1();
upload_racecar2();
    }
}

function left() {

    if (racecar1_x >= 0) {
        racecar1_x = racecar1_x - 10;
        console.log("when left is pressed x = " + racecar1_x + ", y = " + racecar1_y);
        upload_background();
        upload_racecar1();
upload_racecar2();
    }
}

function right() {

    if (racecar1_x <= 500) {
        racecar1_x = racecar1_x + 10;
        console.log("when right arrow is pressed x = " + racecar1_x + ", y = " + racecar1_y);
        upload_background();
        upload_racecar1();
upload_racecar2();
    }
}


function down1() {

    if (racecar2_y <= 300) {
        racecar2_y = racecar2_y + 10;
        console.log("when down arrow is pressed x = " + racecar2_x + ", y = " + racecar2_y);
        upload_background();
        upload_racecar1();
upload_racecar2();
    }
}


function up1() {

    if (racecar2_y <= 300) {
        racecar2_y = racecar2_y - 10;
        console.log("when down arrow is pressed x = " + racecar2_x + ", y = " + racecar2_y);
        upload_background();
        upload_racecar1();
upload_racecar2();
    }
}


function left1() {

    if (racecar2_x  => 0) {
        racecar2_x = racecar2_x - 10;
        console.log("when down arrow is pressed x = " + racecar2_x + ", y = " + racecar2_y);
        upload_background();
        upload_racecar1();
upload_racecar2();
    }
}


function right1() {

    if (racecar2_x <= 500) {
        racecar2_x = racecar2_x + 10;
        console.log("when down arrow is pressed x = " + racecar2_x + ", y = " + racecar2_y);
        upload_background();
        upload_racecar1();
upload_racecar2();
    }
}


