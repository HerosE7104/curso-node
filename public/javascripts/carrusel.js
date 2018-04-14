function Carrusel(element, options) {
    this.element = element;
    this.speed = 2000;
    this.currentImg = 0;
    if (options) {// undefined, null , 0,''
        this.speed = options.speed;
    }
}
Carrusel.prototype.init = function () {

    console.log('velocidad', this.speed);
    this.drawIndicators();
}

Carrusel.prototype.next = function () {
    const slider = this.element.find('.carrusel-slider');
    this.currentImg++;
    /*slider.animate({
        left:(100 * this.currentImg) + '%'
    }, this.speed);*/
    this.animate();
}
Carrusel.prototype.drawIndicators = function () {
    let items = this.element.find('.carrusel-item');
    const indicatorescontenedor = this.element.find('.carrusel-indicadores');
    for (let item of items) {
        indicadorescontenedor.append('<i class="indicador"></i>');
    }
    for(let indicador of indicadorescontenedor.find('i.indicador'))
    {
        let = indicador = indicadorescontenedor.find('i.indicador')
        indicador.click(() => {let index = this.setIndex();

    }
    let _this = this.setIndex(
    indicatorescontenedor.find('i.indicador').click(function(){
        let index = indicatorescontenedor.find('i.indicador').index($(this));
        console.log(index);
        setIndex(index);
    });
    indicatorsContainer.find('i.indicador').eq(0).addClass('active');

}
Carrusel.prototype.setIndex = function(index){
    this.currentImg = index;
}
Carrusel.prototype.animate = function(left){
    slider.animate([
        left: - (100 * this.currentImg)+'%'
    ],this.speed);
    this.animate();
}
