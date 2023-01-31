import { createStore } from 'vuex';

const Store = createStore({
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
	}
})

export default Store;

/** Мутация - установка роста */
export const MUTATIONS_SET_HEIGHT = 'setHeight';
/** Мутация - установка веса */
export const MUTATIONS_SET_WEIGHT = 'setWeight';
