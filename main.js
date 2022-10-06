noseX = 0;
noseY = 0;
function preload()
{
    mustacheimg = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup()
{
    canvas = createCanvas(400,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400 , 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}
function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw()
{
    image(video, 0, 0, 400, 400);
    image( mustacheimg,noseX, noseY, 50, 50);
}

function take_snapshot()
{
    save('Myfilteredimg.png');
}