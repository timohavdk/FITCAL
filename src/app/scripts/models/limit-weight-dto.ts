/**
 * Модель описывающая пределы веса для описания
 *
 * */
export default class LimitWeightDto {
	/** Начальный предел */
	from: number;

	/** Конечный предел */
	to: number;

	constructor(firstNumber: number, secondNumber: number) {
		this.from = firstNumber;
		this.to = secondNumber;
	}
}
