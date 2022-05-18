class gameOver extends Phaser.Scene {
    constructor() {
        super('gameOver'); 
    }

    preload(){
        this.load.image('gameOver', '../assets/gameOver.png');

    }

    create(){
        
        this.add.image(640, 360, 'gameOver');
        

    this.cursors = this.input.keyboard.createCursorKeys();

    }

    update(){

        if (this.cursors.space.isDown){
            this.scene.start("Titlescreen");
        }

    }
}