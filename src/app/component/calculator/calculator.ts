import { defineComponent, ref, Ref } from "vue";
import { useStore } from 'vuex';
import Input from '../input/input.vue';
import {
	MUTATIONS_SET_HEIGHT,
	MUTATIONS_SET_WEIGHT
} from '../../scripts/store'

export default defineComponent({
	name: "Calculator",
	components: {
		Input
	},
	setup() {
		const store = useStore();

		function setWeight(weight: number) {
			store.commit(MUTATIONS_SET_WEIGHT, weight);
			console.log('store weight', store.getters.GET_WEIGHT);
		}

		function setHeight(height: number) {
			store.commit(MUTATIONS_SET_HEIGHT, height);
			console.log('store height', store.getters.GET_HEIGHT);
		}

		return {
			setWeight,
			setHeight
		}
	}
})
