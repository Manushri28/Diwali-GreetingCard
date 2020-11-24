
class FormGame{
    constructor(){
       this.diya = createButton('Diya');
       this.lantern = createButton('Lantern');
       this.goldearings = createButton('Gold-earings');
       this.fairylights = createButton('Fairy-lights');
       this.rangoli = createButton('Rangoli');
       this.sweets = createButton('Sweets');
    }
    display() {
        this.diya.position(50, 110);
        this.diya.style('font-size', '30px');
        this.diya.style('color', 'black');
        this.diya.style('background', 'salmon');

        this.lantern.position(150, 180);
        this.lantern.style('font-size', '30px');
        this.lantern.style('color', 'black');
        this.lantern.style('background', 'yellowgreen');

        this.goldearings.position(50, 270);
        this.goldearings.style('font-size', '30px');
        this.goldearings.style('color', 'black');
        this.goldearings.style('background', 'darkturquoise');

        this.fairylights.position(150, 350);
        this.fairylights.style('font-size', '30px');
        this.fairylights.style('color', 'black');
        this.fairylights.style('background', 'hotpink');

        this.rangoli.position(50, 420);
        this.rangoli.style('font-size', '30px');
        this.rangoli.style('color', 'black');
        this.rangoli.style('background', 'sandybrown');

        this.sweets.position(120, 520);
        this.sweets.style('font-size', '30px');
        this.sweets.style('color', 'black');
        this.sweets.style('background', 'darkorchid');


        this.diya.mousePressed(() => {
            sprite.addImage(diya_img)
        });
        this.lantern.mousePressed(() => {
            sprite.addImage(lantern_img)
            sprite.scale = 0.5
        });
        this.goldearings.mousePressed(() => {
            sprite.addImage(earings_img)
            sprite.scale = 0.5
        });
        this.fairylights.mousePressed(() => {
            sprite.addImage(fairyLights_img)
        });
        this.rangoli.mousePressed(() => {
            sprite.addImage(rangoli_img)
            sprite.scale = 1
        });
        this.sweets.mousePressed(() => {
            sprite.addImage(sweets_img)
            sprites.x = 330
        });


    }
}

