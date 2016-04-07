function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + ' gave 1 life to ' + targetPlayer.name);
    }
}

var Cata7 = new User();
var User7 = new User();

Cata7.name = 'Cata';
User7.name = 'User';

Cata7.giveLife(User7);
console.log('Cata life: ' + Cata7.life);
console.log('User life: ' + User7.life);

// You can add function to the object
User.prototype.uppercut = function(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + ' uppercut ' + targetPlayer.name);
};

User7.uppercut(Cata7);
console.log('Cata life: ' + Cata7.life);
console.log('User life: ' + User7.life);

// You can add property to the object
User.prototype.magic = 60;
User7.uppercut(Cata7);
console.log('Cata magic: ' + Cata7.magic);
console.log('User magic: ' + User7.magic);