import {defineComponent, Ref, ref, computed, watch, onUpdated, onMounted} from 'vue';
import { useStore } from 'vuex';
import {MUTATIONS_SET_PANEL} from '../../scripts/store';
import {PanelEnums} from '../../scripts/models/panel-enums';
import Button from '../button/button.vue';

export default defineComponent({
	name: "Result",
	components: {
		Button
	},
	setup() {
		const store = useStore();

		const bodyMassIndex = computed({
			get() {
				return store.getters.GET_BODY_WEIGHT_INDEX;
			},
			set() {}
		})

		const description: Ref<string> = ref('');

		watch(bodyMassIndex, () => {
			description.value = store.getters.GET_DESC;
		})

		function clickButtonHandler() {
			store.commit(MUTATIONS_SET_PANEL, PanelEnums.CALCULATOR);
		}

		onMounted(() => {
			description.value = store.getters.GET_DESC;
		})

		return {
			clickButtonHandler,
			bodyMassIndex,
			description
		}
	}
})
