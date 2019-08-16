let Hero = function(image,top,left,size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed= speed;
    this.getHeroElement = function () {
        return '<img width="'+ this.size +'"' +
            ' height="'+ this.size +'"' +
            ' src ="'+ this.image +'"' +
            ' style ="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };
    this.moveRight = function () {
        this.left += this.speed;
        console.log('ok:' + this.left);
    };
    this.moveDown = function () {
        this.top += this.speed;
    };
    this.moveUp = function () {
        this.top -= this.speed;
    };
    this.moveLeft = function () {
        this.left -= this.speed;
    }
};
let hero = new Hero('Hercules.png', 0, 0, 250,40);
function start(){
    if ((hero.left < window.innerWidth - hero.size) && (hero.top === 0)) {
        hero.moveRight();
    }
    if ((hero.left >= window.innerWidth - hero.size) && (hero.top < window.innerHeight - hero.size)) {
        hero.moveDown();
    }
    if (hero.top + hero.size > window.innerHeight && hero.left > 0) {
        hero.moveLeft();
    }

    if (hero.left === 0 && hero.top + hero.size > 0) {
        hero.moveUp();
    }
document.getElementById("game").innerHTML= hero.getHeroElement();
setTimeout(start, 500);
}
start();