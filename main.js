lipsX=0;
lipsY=0;

function preload()
{
    lipstick_image= loadImage('https://i.postimg.cc/kXmS3SgR/l1.png');
}

function setup()
{
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipsX=results[0].pose.lips.x-35;
        lipsY=results[0].pose.lips.y-35;
        console.log("lips x=" +lipsX);
        console.log("lips y=" +lipsY);
    }
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function draw()
{
    image(video,0,0,300,300);
    image(lipstick_image,lipsX,lipsY,70,70);
}

function take_snapshot()
{
    save('myfilterapp.png');
}




