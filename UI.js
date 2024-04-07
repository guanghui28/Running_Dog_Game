export default class UI {
    constructor(game) {
        this.game = game;
        this.font = 30;
        this.fontFamily = "Helvetica";
    }
    draw(ctx) {
        ctx.save();
        ctx.font = `${this.font}px ${this.fontFamily}`;
        ctx.fillStyle = this.game.fontColor;
        //score
        ctx.fillText(`Score: ${this.game.score}`, 20, 50);
        //timer
        ctx.font = `${this.fontSize * 0.8}px ${this.fontFamily}`;
        ctx.fillText(`Time: ${(this.game.time * 0.001).toFixed(2)}`, 20, 80);
        //game over message
        if (this.game.gameOver) {
            ctx.textAlign = "center";
            ctx.font = `${this.fontSize * 2}px ${this.fontFamily}`;
            if (this.game.score > 20) {
                ctx.fillText(
                    "Boo-yah",
                    this.game.width * 0.5,
                    this.game.height * 0.5 - 20
                );
                ctx.font = `${this.fontSize * 0.7}px ${this.fontFamily}`;
                ctx.fillText(
                    "What are creatures of the night afraid of YOU!!!",
                    this.game.width * 0.5,
                    this.game.height * 0.5 + 20
                );
            } else {
                ctx.fillText(
                    "Love at the first bite?",
                    this.game.width * 0.5,
                    this.game.height * 0.5 - 20
                );
                ctx.font = `${this.fontSize * 0.7}px ${this.fontFamily}`;
                ctx.fillText(
                    "Nope. Better luck next time!!!",
                    this.game.width * 0.5,
                    this.game.height * 0.5 + 20
                );
            }
        }
        ctx.restore();
    }
}
