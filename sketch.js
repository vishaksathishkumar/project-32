const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour,hr;

var bg = "sunrise.png";

function preload() {
    //getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);
    time();

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : "+ hr%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hr%12 + " AM", 50,100);
    }
    

}

async function time (){

    var date = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var time = await date.json()
    console.log(time);
    var hour = time.datetime;
     hr = hour.slice(11,13);
    if(hour>=0 && hour<18 ){
        bg = "sunset.png";
    }
    else{
        bg="sunrise.png"
    }
    
    backgroundImg = loadImage(bg);
}
