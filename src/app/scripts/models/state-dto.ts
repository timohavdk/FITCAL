import LimitWeightDto from './limit-weight-dto';

export default class StateDto {
	/** Рост */
	height: number;

	/** Вес */
	weight: number;

	/** Индекс массы тела */
	bodyWeightIndex: number;

	/** Описания индекса масс тела */
	description: Map<LimitWeightDto, string>;

	/** Какая панель показыватеся */
	panelShown: string;
}
