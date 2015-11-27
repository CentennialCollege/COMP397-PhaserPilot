module objects {
	export class Ocean extends Phaser.Sprite {
		//PRIVATE INSTANCE VARIABLES
		private _dy:number;
		constructor(game:Phaser.Game, x:number, y:number, spriteString:string) {
			super(game, x, y, spriteString);
			
			this._dy = 5;
			this._reset();
		}
		
		public update():void {
			this.y += this._dy;
			this._checkBounds();
		}
		
		//PRIVATE METHODS
		
		/**
		 * Resets the Ocean to y=-960
		 */
		private _reset():void {
			this.y = -960;
		}
		
		/**
		 * Checks to see if ocean needs to be reset
		 */
		private _checkBounds():void {
			if(this.y >= 0) {
				this._reset();
			}
		}
	}
}