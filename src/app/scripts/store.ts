import {createStore} from 'vuex';
import StateDto from './models/state-dto';
import LimitWeightDto from './models/limit-weight-dto';

const Store = createStore({
	state(): StateDto {
		return {
			height:          0,
			weight:          0,
			bodyWeightIndex: 0,
			description:     new Map([
				[new LimitWeightDto(0, 16.5), 'Severely underweight - BMI less than 16.5kg/m^2'],
				[new LimitWeightDto(16.5, 18.5), 'Underweight - BMI under 18.5 kg/m^2'],
				[new LimitWeightDto(18.5, 24.9), 'Normal weight - BMI greater than or equal to 18.5 to 24.9 kg/m^2'],
				[new LimitWeightDto(24.9, 29.9), 'Overweight – BMI greater than or equal to 25 to 29.9 kg/m^2'],
				[new LimitWeightDto(29.9, 34.9), 'Obesity class I – BMI 30 to 34.9 kg/m^2'],
				[new LimitWeightDto(34.9, 39.9), 'Obesity class II – BMI 35 to 39.9 kg/m^2'],
				[new LimitWeightDto(39.9, 1000), 'Obesity class III – BMI greater than or equal to 40 kg/m^2 (also referred to as severe, extreme, or massive obesity)'],
			]),
		}
	},
	getters:   {
		GET_WEIGHT(state) {
			return state.weight;
		},
		GET_HEIGHT(state) {
			return state.height;
		},
		GET_BODY_WEIGHT_INDEX(state) {
			return state.bodyWeightIndex;
		},
		GET_DESC(state) {
			let result = '';

			state.description.forEach((description: string, limit: LimitWeightDto) => {
				if (state.bodyWeightIndex > limit.from && state.bodyWeightIndex <= limit.to) {
					result = description;
				}
			})

			return result;
		},
		GET_ACCEPT_HEIGHT(state) {
			return state.height > 0 && state.height < 272;
		},
		GET_ACCEPT_WEIGHT(state) {
			return state.weight > 0 && state.weight < 610;
		},
	},
	mutations: {
		setHeight(state, height: number) {
			state.height = height;
		},
		setWeight(state, weight: number) {
			state.weight = weight;
		}
	},
	actions:   {
		getBodyWeightIndex(context: any) {
			const weight: number          = context.state.weight;
			const height: number          = (context.state.height / 100);
			const bodyWeightIndex: number = weight / Math.pow(height, 2);
			context.state.bodyWeightIndex = bodyWeightIndex.toFixed(2);
		},
	}
})

export default Store;

/** Mutations - установка роста */
export const MUTATIONS_SET_HEIGHT = 'setHeight';
/** Mutations - установка веса */
export const MUTATIONS_SET_WEIGHT = 'setWeight';


/** Action - рассчёт индекса массы тела */
export const ACTION_GET_BODY_WEIGHT_INDEX = 'getBodyWeightIndex';

