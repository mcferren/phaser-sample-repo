class SampleScene extends Phaser.Scene {

    constructor() {

        super({
            key: 'SampleScene'
        });
    }

    create() {

        this.add.text(10, 10, 'Phaser 3 Advanced webpack boilerplate');
        this.add.image(300, 300, 'logo');
    }

    update() {

        
    }
}

export default SampleScene;
