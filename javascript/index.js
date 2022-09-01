var c=null;
var ctx=null;
var super_x=40;
var super_y=350;
var player1=null;
var direction1 = 'up';
var playerdirection1 = 'right';
var speed = 50;
var mobSpeed = 0;
var player = new Image();   
var play = new Audio();
var houseImage = new Image();
var house = null;
var gameover = new Audio();
var backImage = new Image();
var ganar = false;
var perder = false;
var mob1 = null;
var mob2 = null;
var mob3 = null;
var mob4 = null;
var mob5 = null;
var mob6 = null;
var mob7 = null;
var mob8 = null;
var mob9 = null;
var mobs = [];
var mobs1 = [];
var mobs2 = [];
var mobs3 = [];
var creeper = new Image();
var zombie = new Image();
var spider = new Image();
var enderman = new Image();
var counter = 0;
var stop = false;
var spiderSound = new Audio();
var creeperSound = new Audio();
var zombieSound = new Audio('src/audio/minecraft-zombie-sounds.mp3');
var endermanSound = new Audio('src/audio/enderman-stare.mp3');
var ganaste = new Audio();
var music = new Audio('src/audio/backgroundmusic.mp3');
var death = new Audio('src/audio/deathsound.mp3');
var tiempoInicio = 0.5;
var tiempo = tiempoInicio * 60;
var min = null;
var sec = null;
window.addEventListener('load', start);

function timeCountdown() {
    if (tiempo != -1 && !perder) {
        min = Math.floor(tiempo / 60);
        sec = tiempo % 60;
        sec = sec < 10 ? '0' + sec : sec
        tiempo--;
    }else{
        perder=true;
    }

}
setInterval(timeCountdown, 1000);

function start(){
    c=document.getElementById("mygame");
    ctx=c.getContext("2d");
    player1 = new Cuadrado(super_x, super_y, 40, 65, 'red' );
    house = new Cuadrado(1380, generateRandomInteger(600), 100,55, 'green' );
    
    backImage.src = 'src/img/pasto.png';
    player.src = 'src/img/javiscript.png';
    
    // spiderSound.src = 'src/audio/spider.mp3';
    
    mob1 = new Cuadrado(140, 0, 50,50, 'white');
    mob2 = new Cuadrado(300, 0, 50,50, 'white');
    mob3 = new Cuadrado(450, 0, 50,50, 'white');
    
    mob4 = new Cuadrado(620, 0, 50,50, 'white');
    mob5 = new Cuadrado(790, 0, 50,50, 'white');
    mob6 = new Cuadrado(940, 0, 50,50, 'white');
    
    mob7 = new Cuadrado(950, 700, 50,50, 'white');
    mob8 = new Cuadrado(1120, 700, 50,50, 'white');
    mob9 = new Cuadrado(1300, 700, 50,50, 'white');
    
    mobs1 = [mob1,mob2,mob3];
    mobs2 = [mob4,mob5,mob6];
    mobs3 = [mob7,mob8,mob9];
    
    mobs = [mobs1,mobs2,mobs3];
    //mobs
    creeper.src = 'src/img/mobs/creeperminecraft.jpeg';
    zombie.src = 'src/img/mobs/zombieminecraft.jpg';
    spider.src = 'src/img/mobs/spiderminecraft.jpeg';
    enderman.src = 'src/img/mobs/EnderMab.jpg';
    houseImage.src = 'src/img/House.png';
    
    ganaste.src = 'src/audio/xp.mp3';
    timeCountdown();
    paint();
}
function paint(){
    window.requestAnimationFrame(paint)
    ctx.drawImage(backImage, 0,0,1500,700);
    //images
    ctx.drawImage(player, player1.x-27, player1.y-15, 90,90);
    //mobs
    ctx.drawImage(creeper, mob1.x, mob1.y, 50,50);
    ctx.drawImage(zombie, mob2.x, mob2.y, 50,50);
    ctx.drawImage(spider, mob3.x, mob3.y, 50,50);
    ctx.drawImage(enderman, mob4.x, mob4.y, 50,50);
    ctx.drawImage(creeper, mob5.x, mob5.y, 50,50);
    ctx.drawImage(zombie, mob6.x, mob6.y, 50,50);
    ctx.drawImage(creeper, mob7.x, mob7.y, 50,50);
    ctx.drawImage(zombie, mob8.x, mob8.y, 50,50);
    ctx.drawImage(enderman, mob9.x, mob9.y, 50,50);

    ctx.drawImage(houseImage, house.x-35, house.y-80, 170,150);
    // house.dibujar(ctx);
    ctx.beginPath();
    ctx.fillStyle ='white';
    ctx.font = "50px Modeka";
    ctx.fillText("Contador: "+ min + sec, 550,50);
    //ganar
    if(ganar){
        ctx.beginPath();
        ctx.fillStyle= "rgba(0,0,0,0.1)";
        ctx.fillRect(0,0,1500,700);
        
        ctx.beginPath();
        ctx.fillStyle ='white';
        ctx.font = "50px Modeka";
        ctx.fillText("Ganaste", 700,350);
    }
    else{    
        update();
    }
    //perder
    if(perder){
        ctx.beginPath();
        ctx.fillStyle= "rgba(255,0,0,0.5)";
        ctx.fillRect(0,0,1500,700);
        
        ctx.beginPath();
        ctx.fillStyle ='white';
        ctx.font = "50px Modeka";
        ctx.fillText("Perdiste", 700,350);
    }
    else{    
        update();
    }
    update();
}
function update(){
    //sounds
    // zombieSound.play();
    // endermanSound.play();
    music.play();
    if (player1.se_tocan(house)){
        speed = 0;
        ganar = true;
        ganaste.play();
    }
    mobs.forEach(mobarray => {
        mobarray.forEach(mob =>{
            if(player1.se_tocan(mob)){
                speed = 0;
                stop=true;
                perder=true;
                console.log("Perdiste");
                death.play();
            }
        })
    });
    mobs1.forEach(mob =>  {
        if (mob.y>700){
            mob.y=0;
        }
        if(stop){
            mobSpeed = 0;
        }else{
            counter % 2 == 0 ? mob.y += mobSpeed + generateRandomInteger(1) : mob.y += mobSpeed + generateRandomInteger(8);
            counter ++;
        }
    });
    mobs2.forEach(mob =>  {
        if (mob.y<0){
            mob.y=700;
        }
        if(stop){
            mobSpeed = 0;
        }else{
            counter % 2 == 0 ? mob.y -= mobSpeed + generateRandomInteger(1) : mob.y -= mobSpeed + generateRandomInteger(8);
            counter ++;
        }
    });
    mobs3.forEach(mob =>  {
        if (mob.y>700){
            mob.y=0;
        }
        if(stop){
            mobSpeed = 0;
        }else{
            counter % 2 == 0 ? mob.y += mobSpeed + generateRandomInteger(1) : mob.y += mobSpeed + generateRandomInteger(8);
            counter ++;
        }
    });
}


document.addEventListener('keydown', function (e) {
// Arriba
    if(e.keyCode==87 || e.keyCode==38){
        direction = 'up';
        player1.y -= speed;

    }
// Abajo
    if(e.keyCode==83 || e.keyCode==40){
        playerdirection1 = 'down';
        player1.y += speed;
    }
    // Izquierda
    if(e.keyCode==65 || e.keyCode==37){
        playerdirection1 = 'left';
        player1.x -= speed;
    }

    // Derecha
    if(e.keyCode==68 || e.keyCode==39){
        playerdirection1 = 'right';
        player1.x += speed;
    }
});

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000);
        };
}());

function Cuadrado(x,y,w,h,color){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color= color;
    this.se_tocan = function (target) { 



        if(this.x < target.x + target.w &&
        
           this.x + this.w > target.x && 
        
           this.y < target.y + target.h && 
        
           this.y + this.h > target.y)
        
        {
        
        return true;  
        
        }  
        
        };
    
    this.dibujar = function(ctx){
        ctx.fillStyle = this.color;
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }


}

function generateRandomInteger(max){
    return Math.floor(Math.random() * max);
}