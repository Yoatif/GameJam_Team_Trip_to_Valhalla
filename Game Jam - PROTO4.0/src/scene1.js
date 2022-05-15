class scene1 extends Phaser.Scene {
    constructor() {
        super("scene1");
    }
    preload() {
        
        this.load.image("tiles","../LD/test_proto_V1.png");
        
        this.load.tilemapTiledJSON('room1', '../LD/Test_LD_V2.json');

        this.load.image("attack","../assets/attack.png");
                
        this.load.spritesheet('hero','../assets/robot_spritesheet.png',
        { frameWidth: 300, frameHeight: 300 });
    }
    create(){

        const levelmap = this.add.tilemap("room1");
        const tileset = levelmap.addTilesetImage(
                "test_proto_V1",
                "tiles"
            );


        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.player = this.physics.add.sprite(100, 450, 'hero',0);

    
        this.player.direction
        this.fireOn = false
        
        //Animations
        
        this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('hero', {start:14,end:17}),
        frameRate: 10,
        repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('hero', {start:0,end:0}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('hero', {start:4,end:7}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('hero', {start:1,end:12}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('hero', {start:19,end:22}),
            frameRate: 10,
            repeat: -1
        });
    //Fin Animations
        this.cameras.main.zoom = 4
            this.cameras.main.startFollow(this.player); 
            this.physics.world.setBounds(0, 0, 3000, 5000);
            this.cameras.main.setBounds(0, 0, null, null);
        
        
        this.walls.setCollisionByProperty({collider:true});
        this.physics.add.collider(this.player,this.walls);
        
        this.groupeBoule =this.physics.add.group();
        
        

        
    
    }
    update(){
        
        
        
        
    
        this.player.body.velocity.set(0);
    
        this.walls.setCollisionByProperty({ collider:true});
        this.physics.add.collider(this.player,this.walls);
    
    
    
        //Déplacements


        //Déplacement normaux
        if (this.cursors.left.isDown){ //si la touche gauche est appuyée
            this.player.setVelocityX(-160); //alors vitesse négative en X
            this.player.setVelocityY(0);
            this.player.anims.play('left', true); //et animation => gauche
            this.player.direction = "left"
            this.playerdash = false;
        }
        
        
        
        
        
        
        
        if (this.cursors.right.isDown){ //sinon si la touche droite est appuyée
            this.player.setVelocityX(160); //alors vitesse positive en X
            this.player.setVelocityY(0);
            this.player.anims.play('right', true); //et animation => droite
            this.player.direction = "right";
            this.playerdash = false;
        }
        
        
        
        
        
        
        
        if (this.cursors.up.isDown){
        //si touche haut appuyée
            this.player.setVelocityY(-160);
            this.player.setVelocityX(0);
            this.player.anims.play('up', true); //alors vitesse verticale négative
            this.player.direction = "up";
            this.playerdash = false;
        }
        
        
        
        
        
        
        if (this.cursors.down.isDown){
        //si touche bas appuyée
            this.player.setVelocityY(160);
            this.player.setVelocityX(0);
            this.player.anims.play('down', true); //alors vitesse verticale négative
            this.player.direction = "down";
            this.playerdash = false;
        
        }
        if (this.cursors.space.isDown){
        
            
            this.tirer();
        
        }
            

        
        else if(this.cursors.down.isUp && this.cursors.up.isUp && this.cursors.left.isUp && this.cursors.right.isUp && this.cursors.shift.isUp){
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
            this.player.anims.play('turn', true);
        
        




        }//Etat du sablier suivant la barre de vie
        if(this.hp==4){
            this.barrevie = this.add.sprite(450,450,"lifebar",0).setScale(2);
                this.barrevie.setInteractive();
                this.barrevie.setScrollFactor(0);
            }
        else if(this.hp==3){
            this.barrevie = this.add.sprite(450,450,"lifebar",1).setScale(2);
            this.barrevie.setInteractive();
            this.barrevie.setScrollFactor(0);
    
    
        }
        else if(this.hp==2){
            this.barrevie = this.add.sprite(450,450,"lifebar",2).setScale(2);
            this.barrevie.setInteractive();
            this.barrevie.setScrollFactor(0);
    
    
        }
        else if(this.hp==1){
            this.barrevie = this.add.sprite(450,450,"lifebar",3).setScale(2);
            this.barrevie.setInteractive();
            this.barrevie.setScrollFactor(0);
        }
        else if(this.hp==0){
            this.scene.start("gameOver")
    
    
        }//Si on a plus de vie, le Game Over se lance
    
    
        //

        
        if (this.player.y > 980){
            this.scene.start("scene2");

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