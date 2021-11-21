img="";
status="";
function preload()
{
    img = loadImage('bottle.jpeg');
    
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
    text("bottle",  95, 75);
    noFill();
    stroke('#FF0000');
    rect(90, 60 , 380,370)
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