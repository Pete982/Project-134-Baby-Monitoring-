image = "";

status = "";

objects = [];

function preload(){
 audio = loadSound("ring_old_phone.mp3");
    
}

function setup(){
 canvas = createCanvas(300, 300);

 canvas.center();

 video = createCapture(VIDEO);

 video.size(380, 380);

 video.hide();

 objectDetector() = ml5.objectDetector('cocossd', moddelloaded);
document.getElementById("status").innerHTML = " The Status Is Now: Detecting Objects";



}

function modelloaded(){
   console.log("The Model is NOW Loaded!!!");
  status = true;




}

function gotResult(error, results){
 if(error) {
    console.log(error);
 }
    console.log(results);


    objects = results;  

}

function draw(){

    image(video, 0, 0, 380, 380);
    if(status != "person") {
    r = random(255);
    g = random(255);
    b = random(255);

    ObjectDetector.detect(video, gotResult);
    for (i = 0; i < objects.length; i++) {

        document.getElementById("status").innerHTML = "What's Happening: Objects Detected";
        document.getElementById("number_of_objects").innerHTML = "The Person is Found" + objects.length;
        audio.stop();

        fill(r, g, b);

        percent = floor(objects[i].confidence * 100);

        text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y  + 15);

        nofill();

        stroke(r, g, b);

        rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
    }

    }
    else { 
   document.getElementById("status").innerHTML = "Status : Objects Detected";
   document.getElementById("number_of_objects").innerHTML = "The Person is Definetly Not Found" + objects.length;
   audio.play();



    }

}