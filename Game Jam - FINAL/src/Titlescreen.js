class Titlescreen extends Phaser.Scene {
    constructor() {
        super("Titlescreen"); 
    }

    preload(){
        this.load.image("TitleScreen", "../assets/menu.png");
        this.load.image("boutonplay", "../assets/PLAY.png");
        this.load.image("boutonquit", "assets/EXIT.png");


    }

    create(){


        var group = this.add.group({
            key: 'TitleScreen',
            frameQuantity: 32,
            setXY: { x: 700, y: 400 },
            setScale: { x: 0.5, y: 0.4, }
        });
        
        //this.add.image(0, 0, "TitleScreen");
        
        
        //this.cursors = this.input.keyboard.createCursorKeys();

        
        var boutonplay = this.add.image(500,250, "boutonplay").setInteractive();
        boutonplay.on("pointerdown", function (pointer){
            this.scene.scene.start("scene1")
        });

        boutonplay.setScale(0.2)

        var boutonquit = this.add.image(500,500, "boutonquit").setInteractive();
        boutonquit.on("pointerdown", function (pointer){
            this.scene.scene.stop("Titlescreen");
        });

        boutonquit.setScale(0.2)

    }

    update(){

        /*if (this.cursors.space.isDown){
            this.scene.start("scene1");
        }*/

    }
}

