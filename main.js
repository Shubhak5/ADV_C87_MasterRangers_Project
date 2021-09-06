var canvas = new fabric.Canvas("myCanvas"); //creating a reference to canvas in a variable

//size of the blocks
block_img_width = 10;
block_img_height = 10;

//Starting x and y position for the player
player_x = 10;
player_y = 10;

var player_object = ""; //creates a player object
var block_object = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top: player_y, left: player_x });
        canvas.add(player_object);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(img) {
        block_object = img;
        block_object.scaleToHeight(block_img_height);
        block_object.scaleToWidth(block_img_width);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80") {
        console.log("Shift and P pressed together");
        //Increase the block size
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;

        //display the block sizes
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (e.shiftKey == true && keyPressed == "77") {
        console.log("Shift and m pressed together");
        //decrease the block size
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;

        //display the block size
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (keyPressed == '37') {
        left();
        console.log("Left");
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '39') {
        right();
        console.log("Right");
    }
    if (keyPressed == '40') {
        down();
        console.log("Down");
    }
    if (keyPressed == '66') {
        newImage('blue.jpg');
        console.log("b");
    }
    if (keyPressed == '67') {
        newImage('cloud.jpg');
        console.log("c");
    }
    if (keyPressed == '68') {
        newImage('dark_green.png');
        console.log("d");
    }
    if (keyPressed == '69') {
        newImage('gold.jpg');
        console.log("e");
    }
    if (keyPressed == '70') {
        newImage('grey.jpg');
        console.log("f");
    }
    if (keyPressed == '71') {
        newImage('light_green.png');
        console.log("g");
    }
    if (keyPressed == '72') {
        newImage('maroon.jpg');
        console.log("h");
    }
    if (keyPressed == '73') {
        newImage('metallic.jpg');
        console.log("i");
    }
    if (keyPressed == '74') {
        newImage('olive.jpg');
        console.log("j");
    }
    if (keyPressed == '75') {
        newImage('red.jpg');
        console.log("k");
    }
    if (keyPressed == '76') {
        newImage('redSolid.jpg');
        console.log("l");
    }
    if (keyPressed == '77') {
        newImage('spider.jpg');
        console.log("m");
    }
    if (keyPressed == '78') {
        newImage('spiderMask.jpg');
        console.log("n");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_img_height;
        console.log("Block Image Height:" + block_img_height);
        console.log("When Up arrow key is pressed, X=" + player_x + " Y=" + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_img_height;
        console.log("Bloack Image Height :" + block_img_height);
        console.log("When Down arrow key is pressed, X=" + player_x + " Y=" + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_img_width;
        console.log("Bloack Image Width :" + block_img_width);
        console.log("When Left arrow key is pressed, X=" + player_x + " Y=" + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_img_width;
        console.log("Bloack Image Width :" + block_img_width);
        console.log("When Right arrow key is pressed, X=" + player_x + " Y=" + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}