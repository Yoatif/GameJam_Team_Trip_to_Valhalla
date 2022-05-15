class scene2 extends Phaser.Scene {
                    constructor() {
                        super("scene2");
                    } 
                    preload() {
                        this.load.image("tiles","../assets/ground and walls.png");
                        
                        this.load.tilemapTiledJSON('scene2', '../LD/scene2.json');

                        this.load.image("attack_up","../assets/attackup.png");

                        this.load.image("attack_down","../assets/attackdown.png");

                        this.load.image("attack_right","../assets/attackright.png");

                        this.load.image("attack_left","../assets/attackleft.png");
                        
                        this.load.spritesheet("lifebar","../assets/life bar.png",
                        { frameWidth: 16, frameHeight: 32 });
                        
                        
                        this.load.spritesheet("Inventory","../assets/inventory.png",
                        { frameWidth: 96, frameHeight: 32 });

                        
                        this.load.spritesheet('hero','../assets/hero.png',
                        { frameWidth: 32, frameHeight: 32 });
                    }
                    create(){
                        const levelmap = this.add.tilemap("scene2");
                        const tileset = levelmap.addTilesetImage(
                            "ground and walls",
                            "tiles"
                        );

                        this.hp=4;


                        this.cursors = this.input.keyboard.createCursorKeys();
                        
                        const ground  = levelmap.createLayer(
                            "ground",
                            tileset
                        ); 
                        
                        this.walls = levelmap.createLayer(
                            "walls",
                            tileset                    
                        );
                        this.trous  = levelmap.createLayer(
                            "trous",
                            tileset                    
                        );
                        
                        this.player = this.physics.add.sprite(100, 450, 'hero',0);

                        
                    
                        
                        
                        this.player.body.setSize(8,17);
                        
                        const doors  = levelmap.createLayer(
                            "doors",
                            tileset
                        ); 
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
                            frames: this.anims.generateFrameNumbers('hero', {start:0,end:3}),
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
                            frames: this.anims.generateFrameNumbers('hero', {start:9,end:12}),
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
                        
                        
                        this.walls.setCollisionByProperty({ estSolide:true});
                        this.physics.add.collider(this.player,this.walls);
                        
                        this.groupeBoule =this.physics.add.group();
                        
                        

                        
                    
                    }
                    update(){
                        
                        
                        
                        
                    
                        this.player.body.velocity.set(0);
                    
                        this.walls.setCollisionByProperty({ estSolide:true});
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
                        /*if(this.hp==4){
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
                    
                    
                        }*///Si on a plus de vie, le Game Over se lance
                    
                    
                        //

                        
                        if (this.player.y > 980){
                            this.scene.start("room2");

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