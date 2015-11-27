module scenes {
	export class Game extends Phaser.Game {
		// Instance Variables
		ocean:objects.Ocean;
		plane:objects.Plane;
		constructor() {
			super(640, 480, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });

		}

		public preload(): void {
			this.load.image('ocean', '../Assets/images/ocean.gif');
			this.load.image('plane', '../Assets/images/plane.png');
			this.load.audio('engine', '../Assets/sounds/engine.ogg');
		}

		public create(): void {
			this.ocean = new objects.Ocean(this, 0, 0, 'ocean');
			this.add.existing(this.ocean);
			
			this.plane = new objects.Plane(this, 0, 0, 'plane', 'engine');
			this.add.existing(this.plane);
					
			//this.logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
			//this.logo.anchor.setTo(0.5, 0.5);
		}
		

	}
}


