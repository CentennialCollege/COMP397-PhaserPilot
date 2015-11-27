module objects {
        // Plane Class
        export class Plane extends Phaser.Sprite {
                private _engineSound: Phaser.Sound;
                // CONSTRUCTOR ++++++++++++++++++++++++++++
                constructor(game:Phaser.Game, x:number, y:number, spriteString:string, engineSoundString:string) {
                        super(game, x, y, spriteString);
                        
                        // set registration point to the center of the object
                        this.anchor.setTo(0.5, 0.5);
                        
                        this.y = 430;
                        // play engine sound
                        this._engineSound = this.game.add.audio(engineSoundString);
                        this._engineSound.loop = true;
                        this._engineSound.play(); 
                }
		
		/** 
		 * Update Method for Plane Class
		*/
                public update(): void {
                        
                        // for moving with mouse
                        this.x = this.game.input.mousePointer.x;
                }

                public engineOff(): void {
                        console.log("Engine off");
                        this._engineSound.stop();
                }
        }
}