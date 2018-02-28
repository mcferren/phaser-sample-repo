import Phaser           from 'phaser';
import BootScene        from './BootScene';
import SampleScene      from './scenes/SampleScene';

const config = {
    type: Phaser.AUTO,
    width: 500,
    height: 500,
    title: 'Game',
    url: 'http://sample.com',
    banner: {
        hidePhaser: true
    },
    scene: [
        BootScene,
        SampleScene
    ]
};

class AppGame extends Phaser.Game {
    constructor(config) {
        super(config);
    }
}

let game = new AppGame(config);
