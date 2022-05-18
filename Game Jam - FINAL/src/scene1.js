

class scene1 extends Phaser.Scene {
    constructor() {
        super("scene1");
    }
    preload() {
        
        this.load.tilemapTiledJSON("scene1", "../LD/Proto_scene1_resize.json");
        this.load.image("jeudetuile","../assets/Tiles.png"); 
        this.load.image("attack","../assets/attack.png");
        this.load.spritesheet("hero","../assets/spriteshithero.png",
        { frameWidth: 400, frameHeight: 400 });

    }

    create(){
// permet de créer la map, les collisions, et les déplacements
        this.cursors = this.input.keyboard.createCursorKeys();
        const carteDuNiveau = this.add.tilemap("scene1");

            // importer les TileSet

         const tiles1= carteDuNiveau.addTilesetImage(
                "Tiles",
                "jeudetuile",
                );



        this.treeb = carteDuNiveau.createLayer(
            "trees back",
            tiles1, 
            );
            

        this.ground = carteDuNiveau.createLayer(
            "ground",
            tiles1, 
            );

        this.treef = carteDuNiveau.createLayer(
            "trees front",  
            tiles1,
        );

        this.foreground = carteDuNiveau.createLayer(
            "foreground",
            tiles1,
        );

        this.player = this.physics.add.sprite(100, 1050, "hero",0).setScale(0.3);


        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('hero', {start:1,end:4}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('hero', {start:5,end:8}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'attackright',
            frames: this.anims.generateFrameNumbers('hero', {start:9,end:9}),
            frameRate: 10,
            repeat: 1
        });
        this.anims.create({
            key: 'attackleft',
            frames: this.anims.generateFrameNumbers('hero', {start:10,end:10}),
            frameRate: 10,
            repeat: 1
        });
        this.player.direction
        this.fireOn = false
        this.player.body.setSize(100,300).setOffset(150,100);
        this.ground.setCollisionByProperty({collider:true});
        this.physics.add.collider(this.player,this.ground);
        this.groupeBoule =this.physics.add.group();
        this.cameras.main.zoom = 1;
            this.cameras.main.startFollow(this.player);
            this.physics.world.setBounds(0, 0, 1000, 0);
    }


    update(){
        //déplacement
        if (this.cursors.left.isDown){ //si la touche gauche est appuyée
            this.player.setVelocityX(-400); //alors vitesse négative en X
            this.player.anims.play('left',true); //et animation => gauche
            this.player.direction = "left"

        }
        
        else if (this.cursors.right.isDown){ //sinon si la touche droite est appuyée
            this.player.setVelocityX(400); //alors vitesse positive en X
            this.player.anims.play('right', true); //et animation => droite
            this.player.direction = "right";
        }
        else if (this.cursors.up.isDown && this.player.body.onFloor()){
            //si touche haut appuyée
                this.player.setVelocityY(-400);
            }
        else if(this.cursors.up.isUp && this.cursors.right.isUp && this.cursors.left.isUp)
            this.player.setVelocityX(0)
            if (this.player.x > 14300){
                this.scene.start("scene2");

            }

    }

    
}

