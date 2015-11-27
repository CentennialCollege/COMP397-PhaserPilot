/// <reference path = "_reference.ts"/>

class SimpleGame {
	// Instance Variables
	public game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
        
    }

    

    public preload():void {
        this.game.load.image('logo', '../Assets/images/Phaser-Logo-Small.png');
    }

    public create():void {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }

}

window.onload = () => {

    var game = new SimpleGame();

};