import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			height: 0,
			weight: 0,
			result: 0
		}
	},
	getters: {
		GET_WEIGHT(state) {
			return state.weight
		},
		GET_HEIGHT(state) {
			return state.height
		},
	},
	mutations: {
		setHeight(state, height: number) {
			state.height = height;
		},
		setWeight(state, weight: number) {
			state.weight = weight;
		}
	}
})

export default store;

/** Мутация - установка роста */
export const MUTATIONS_SET_HEIGHT = 'setHeight';
/** Мутация - установка веса */
export const MUTATIONS_SET_WEIGHT = 'setWeight';
