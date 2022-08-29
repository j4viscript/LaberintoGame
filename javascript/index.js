var c=null;
var ctx=null;
var super_x=240;
var super_y=240;
var player1=null;
var direction = 'right';
var speed = 10; 
var player = new Image();   
var play = new Audio();
var gameover = new Audio();
var backImage = new Image();
var mob1 = null;
var mobs = [];
var creeper = new Image();
var zombie = new Image();
var spider = new Image();
var enderman = new Image();

function paint(){
    window.requestAnimationFrame(paint)
    ctx.drawImage(backImage, 0,0,1200,700);
    //images
    ctx.drawImage(player, player1.x, player1.y, 100,100);

    //mobs
    ctx.drawImage(creeper, 600, 500, 70,70);
    ctx.drawImage(zombie, 700, 100, 70,70);
    ctx.drawImage(spider, 800, 400, 70,70);
    ctx.drawImage(enderman, 900, 600, 70,70);
    // update();
}
// function update(){
//     if(direction=='right'){
//         player1.x += 0;
//         if (player1.x>1200){
//             player1.x=0;
//         }
//     }
//     if(direction == 'down'){
//         player1.y += 0;
//         if (player1.y>700){
//             player1.y=0;
//         }
//     }

//     if(direction=='left'){
//         player1.x -= 0;
//         if (player1.x<0){
//             player1.x=1200;
//         }
//     }
//     if(direction=='up'){
//         player1.y -= 0;
//         if (player1.y<0){
//             player1.y=700;
//         }
//     }
// }
document.addEventListener('keydown', function (e) {
// Arriba
    if(e.keyCode==87 || e.keyCode==38){
        player1.y -= speed;
        direction = 'up';
    }
// Abajo
    if(e.keyCode==83 || e.keyCode==40){
        player1.y += speed;
        direction = 'down';
    }
    // Izquierda
    if(e.keyCode==65 || e.keyCode==37){
        player1.x -= speed;
        direction = 'left';
    }

    // Derecha
    if(e.keyCode==68 || e.keyCode==39){
        player1.x += speed;
        direction = 'right';

    }
});

window.addEventListener('load', start);

function start(){
    c=document.getElementById("mygame");
    ctx=c.getContext("2d");
    player1 = new Cuadrado(super_x, super_y, 40, 40, 'white');

    backImage.src = '/src/img/pasto.png';
    player.src = '/src/img/javiscript.png';

    //mobs
    creeper.src = '/src/img/mobs/creeperminecraft.jpeg';
    zombie.src = '/src/img/mobs/zombieminecraft.jpg';
    spider.src = '/src/img/mobs/spiderminecraft.jpeg';
    enderman.src = 'src/img/mobs/EnderMab.jpg';
    paint();
}

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