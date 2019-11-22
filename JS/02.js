// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов. 

class Marker {
    constructor(_color, _quantity) {
        this.color = _color;
        this.quantity = _quantity;
    }
    print(text) {
        let styles = `color: ${this.color}`;
        let textLength = Math.floor((100 / 0.5) * this.quantity);
        let spaces = 0;
        for (let i = 0; i < textLength; i++) {
            if (text[i] == " ") {
                spaces++;
            }
        }
        text = text.substr(0, textLength + spaces);
        document.write(`<p style= "${styles}">${text}</p>`);
    }
}
let greenMarker = new Marker("green", 0.5);
let redMarker = new Marker("red", 0.9);
greenMarker.print(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus nunc at faucibus posuere. In eu vulputate eros. Etiam consequat laoreet dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis commodo, turpis mollis efficitur iaculis, nunc magna pellentesque nulla, ac imperdiet mauris diam quis turpis. Maecenas imperdiet velit urna, non convallis augue tincidunt vel. Nullam malesuada vestibulum augue vitae accumsan. Nam non purus accumsan, porta risus quis, suscipit tortor."
);
redMarker.print(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus nunc at faucibus posuere. In eu vulputate eros. Etiam consequat laoreet dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis commodo, turpis mollis efficitur iaculis, nunc magna pellentesque nulla, ac imperdiet mauris diam quis turpis. Maecenas imperdiet velit urna, non convallis augue tincidunt vel. Nullam malesuada vestibulum augue vitae accumsan. Nam non purus accumsan, porta risus quis, suscipit tortor."
);

class FillMarker extends Marker {
    constructor(_color, _quantity, _newQuantity) {
        super(_color, _quantity);
        this.newQuantity = _newQuantity;
    }
    print(text) {
        console.log(text.length);
        let styles = `color: ${this.color}`;
        let textLength = Math.floor((100 / 0.5) * (this.quantity + this.newQuantity));
        let spaces = 0;
        for (let i = 0; i < textLength; i++) {
            if (text[i] == " ") {
                spaces++;
            }
        }
        text = text.substr(0, textLength + spaces);
        console.log(textLength);
        document.write(`<p style= "${styles}">${text}</p>`);
    }
}
let pinkMarker = new FillMarker("pink", 0.2, 0.1);
pinkMarker.print("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus nunc at faucibus posuere. In eu vulputate eros. Etiam consequat laoreet dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis commodo, turpis mollis efficitur iaculis, nunc magna pellentesque nulla, ac imperdiet mauris diam quis turpis. Maecenas imperdiet velit urna, non convallis augue tincidunt vel. Nullam malesuada vestibulum augue vitae accumsan. Nam non purus accumsan, porta risus quis, suscipit tortor.");


