import { defineComponent, ref, Ref } from "vue";
import { useStore } from 'vuex';
import Input from '../input/input.vue';
import Button from "../button/button.vue";
import {
	ACTION_GET_BODY_WEIGHT_INDEX,
	MUTATIONS_SET_HEIGHT,
	MUTATIONS_SET_WEIGHT
} from '../../scripts/store'

export default defineComponent({
	name: "Calculator",
	components: {
		Input,
		Button
	},
	props: {},
	emits: ['calculate-result'],
	setup(props, { emit }) {
		const store = useStore();

		const isErrorShow: Ref<boolean> = ref(false);

		/** Сообщение об ошибке */
		const ERROR_MESSAGE: string = 'Please, enter all correct data';

		function setWeight(weight: number) {
			store.commit(MUTATIONS_SET_WEIGHT, weight);
		}

		function setHeight(height: number) {
			store.commit(MUTATIONS_SET_HEIGHT, height);
		}

		function clickHandler() {
			if (store.getters.GET_ACCEPT_HEIGHT && store.getters.GET_ACCEPT_WEIGHT) {
				store.dispatch(ACTION_GET_BODY_WEIGHT_INDEX);
				isErrorShow.value = false;
				emit('calculate-result');

				return;
			}

			isErrorShow.value = true;
		}

		return {
			isErrorShow,
			ERROR_MESSAGE,
			setWeight,
			setHeight,
			clickHandler
		}
	}
})
