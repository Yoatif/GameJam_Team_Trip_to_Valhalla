class Titlescreen extends Phaser.Scene {
    constructor() {
        super('Titlescreen'); 
    }

    preload(){
        this.load.image('TitleScreen', 'assets/Titlescreen.png');

    }

    create(){
        
        this.add.image(640, 360, 'TitleScreen');
        

    this.cursors = this.input.keyboard.createCursorKeys();

    }

    update(){

        if (this.cursors.space.isDown){
            this.scene.start("room1");
        }

    }
}