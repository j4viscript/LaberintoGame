var c=null;
var ctx=null;
var super_x=40;
var super_y=350;
var player1=null;
var direction1 = 'up';
var playerdirection1 = 'right';
var speed = 30;
var mobSpeed = 5;
var player = new Image();   
var play = new Audio();
var gameover = new Audio();
var backImage = new Image();
var mob1 = null;
var mob2 = null;
var mob3 = null;
var mob4 = null;
var mobs = [];
var creeper = new Image();
var zombie = new Image();
var spider = new Image();
var enderman = new Image();
var counter = 0;



window.addEventListener('load', start);

function start(){
    c=document.getElementById("mygame");
    ctx=c.getContext("2d");
    player1 = new Cuadrado(super_x, super_y, 40, 40, 'white');

    backImage.src = '/src/img/pasto.png';
    player.src = '/src/img/javiscript.png';


    mob1 = new Cuadrado(240, 0, 50,50, 'white');
    mob2 = new Cuadrado(340, 0, 50,50, 'white');
    mob3 = new Cuadrado(440, 0, 50,50, 'white');
    mob4 = new Cuadrado(590, 0, 50,50, 'white');

    mobs = [mob1,mob2,mob3,mob4];
    //mobs
    creeper.src = '/src/img/mobs/creeperminecraft.jpeg';
    zombie.src = '/src/img/mobs/zombieminecraft.jpg';
    spider.src = '/src/img/mobs/spiderminecraft.jpeg';
    enderman.src = 'src/img/mobs/EnderMab.jpg';


    paint();
}
function paint(){
    window.requestAnimationFrame(paint)
    ctx.drawImage(backImage, 0,0,1200,700);
    //images
    ctx.drawImage(player, player1.x, player1.y, 50,50);

    //mobs
    ctx.drawImage(creeper, mob1.x, mob1.y, 50,50);
    ctx.drawImage(zombie, mob2.x, mob2.y, 50,50);
    ctx.drawImage(spider, mob3.x, mob3.y, 50,50);
    ctx.drawImage(enderman, mob4.x, mob4.y, 50,50);
    update();
}
function update(){
    mobs.forEach(mob =>  {
        counter % 2 == 0 ? mob.y += mobSpeed + generateRandomInteger(10) : mob.y += mobSpeed + generateRandomInteger(5)
        counter ++
        if (mob.y>700){
            mob.y=0;
        }
        if(player1.se_tocan(mob)){
            speed = 0;
            mobSpeed = 0;
            console.log("Si jala");
        }
    });
}


document.addEventListener('keydown', function (e) {
    console.log(e);
// Arriba
    if(e.keyCode==87 || e.keyCode==38){
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