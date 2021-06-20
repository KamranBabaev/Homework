// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.
export function sum(...nums: Array<any>): number {
    return nums.reduce((acc, elem) => acc + elem, 0)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.
export function getTriangleType(a: number, b: number, c: number) {
    if (a === b && b === c) {
        return '10'
    } else if ((a === b && (a + b) > c) || (b === c && (b + c) > a) || (a === c && (a + c) > b)) {
        return '01'
    } else if (a !== b && a !== c && b !== c) {
        return '11'
    } else if (a + b < c || a + c < b || b + c < a) {
        return '00'
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа
export function getSum(number: number): number {
    return number.toString().split('')
        .reduce((acc, elem) => acc + +elem, 0)
}


// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.
export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let even = []
    let odd = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }
    return even > odd
}


// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.
export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    let areaSquare = Math.sqrt(areaSq)              // площадь квадрата а*а, а мне нужна только его сторона, значит беру квадартный корень
    let areaСircle = Math.sqrt(areaCr / 3.14)   // мне нужен диаметр круга, он равен квадартному корню из площади / на ПИ
    return areaSquare >= areaСircle                // в итоге получили сторону квадрата и диаметр,
                                                    // чтобы круг поместился в квадрат его диаметр не может првевышать сторону квадрата
}


// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {

    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const result: Array<number> = []

    if (amountOfMoney > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            const note = banknotes[i]

            while (amountOfMoney - note >= 0) {
                amountOfMoney -= note
                result.push(note)
            }
        }
    } else {
        alert('денег нет, но вы держитесь!')
    }
    return result
}