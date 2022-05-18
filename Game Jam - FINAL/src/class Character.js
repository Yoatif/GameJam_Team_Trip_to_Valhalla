class mainCharacter {
    constructor(hp){
        this.hp = hp
         //Déplacement normaux
         if (this.cursors.left.isDown){ //si la touche gauche est appuyée
            this.player.setVelocityX(-160); //alors vitesse négative en X
            this.player.setVelocityY(0);
            this.player.anims.play('left', true); //et animation => gauche
            this.player.direction = "left"
        }
        
        
        
        
        
        
        
        if (this.cursors.right.isDown){ //sinon si la touche droite est appuyée
            this.player.setVelocityX(160); //alors vitesse positive en X
            this.player.setVelocityY(0);
            this.player.anims.play('right', true); //et animation => droite
            this.player.direction = "right";

        }
        
        
        
        
        
        
        
        if (this.cursors.up.isDown){
        //si touche haut appuyée
            this.player.setVelocityY(-160);
            this.player.setVelocityX(0);
            this.player.anims.play('up', true); //alors vitesse verticale négative
            this.player.direction = "up";

        }
        
        
        
        
        
        
        if (this.cursors.down.isDown){
        //si touche bas appuyée
            this.player.setVelocityY(160);
            this.player.setVelocityX(0);
            this.player.anims.play('down', true); //alors vitesse verticale négative
            this.player.direction = "down";

        
        }
        if (this.cursors.space.isDown){
        
            
            this.tirer();
        


        }


    }
    tirer() {

        this.root;
        this.fireOn == true;



        if (this.player.direction == "left") { 
            console.log("bygzu")
            this.root = this.groupeBoule.create(this.player.x - 25, this.player.y - 4, "attack");
            this.root.setVelocity(-400,0);
        }
        if (this.player.direction == "right") {
            console.log("bygzu")
            this.root = this.groupeBoule.create(this.player.x + 25, this.player.y - 4, "attack"); 
            this.root.setVelocity(400,0);
        }
        if (this.player.direction == "up") {
            console.log("bygzu")
            this.root = this.groupeBoule.create(this.player.x, this.player.y - 4, "attack");
            this.root.setVelocity(0,-400);
        }
        if (this.player.direction == "down") { 

            this.root = this.groupeBoule.create(this.player.x, this.player.y - 4, "attack");
            this.root.setVelocity(0,400);
        }

    }
}

class Enemies{
    constructor(hps, type, number){
        this.hps = hps
        this.type = type
        this.number = number
        this.enemy
        if (this.type = 1){
            this.load.spritesheet('enemy1','assets/robot_spritesheet.png',
            { frameWidth: 300, frameHeight: 300 })
            
        }
        if (this.type = 2){
            this.load.spritesheet('enemy2','assets/robotboss_spritesheet.png',
        { frameWidth: 300, frameHeight: 300 })   
        }
        if (this.type = 3){
            this.load.spritesheet('enemy3','assets/soldiers_spritesheet.png',
            { frameWidth: 300, frameHeight: 300 })
        }
        
    }
}