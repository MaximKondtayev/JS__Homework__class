// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 


class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set radius(value) {
        this._radius = value;
    }
    get radius() {
        return this._radius;
    }
    get diametr() {
        return this._radius * 2;
    }

    area() {
        let area = (Math.PI * this._radius ** 2).toFixed(2);
        return area;
    }
    lenght() {
        let circuit = (Math.PI * this._radius * 2).toFixed(2);
        return length;
    }
}

let circle = new Circle(10);
console.log(circle);
console.log(circle.area());
console.log(circle.lenght());