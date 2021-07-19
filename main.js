canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;




marsimages=["1.jpg","2.jpg"];
random_number=Math.floor(Math.random()*2);
background_image=marsimages[random_number];
rover_image="rover.png";



function add(){
background_imgtag= new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src= background_image;

rover_imgTag = new Image();
rover_imgTag.onload =uploadrover;
rover_imgTag.src=rover_image;



}

function uploadBackground() {
ctx.drawImage(background_imgtag,0,0, canvas.width,canvas.height);

    
}


function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x,rover_y,rover_width,rover_height);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)

{

keypressed =e.keyCode;
console.log(keypressed);
    if(keypressed=='38')
    {
   up();
      console.log("up");
    }
    if(keypressed=='40')
    {
   down();
      console.log("down");
    }
    if(keypressed=='37')
    {
   left();
      console.log("left");
    }
    if(keypressed=='39')
    {
   right();
      console.log("right");
    }
}

function up()
{
    if(rover_y >=0)
    {
        rover_y =rover_y-10;
        uploadBackground();
        uploadrover();
    }
}

function down()
{
    if(rover_y <=500)
    {
        rover_y =rover_y+10;
        uploadBackground();
        uploadrover();
    }
}


function left()
{
    if(rover_x >=0)
    {
        rover_x =rover_x-10;
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(rover_x <=700)
    {
        rover_x =rover_x+10;
        uploadBackground();
        uploadrover();
    }
}

        

