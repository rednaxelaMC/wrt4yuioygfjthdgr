img="";
status="";
function preload()
{
    img = loadImage('fan.jpeg');
    
}
function setup()
{
    canvas=createCanvas(620,420);
    canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status-detecting objects"
}
function draw()
{
    image(img,0,0,620,420);
    fill("#FF0000");
    text("fan",  95, 75);
    noFill();
    stroke('#FF0000');
    rect(90, 60 , 500,300)
}
function modelLoaded()
{
    console.log("model loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
if(error)
{
    console.log(error);

}
else{
    console.log(results);
}
}