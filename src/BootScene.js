import Phaser 		from 'phaser';
import image 		from './assets/images/logo.png';

class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload() {

        this.load.image('logo', image);
    }

    create() {

        this.scene.start('SampleScene')
    }
}

export default BootScene;
