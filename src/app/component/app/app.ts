import {defineComponent, ref, Ref, computed} from "vue";
import Calculator from '../calculator/calculator.vue';
import Result from '../result/result.vue';
import Description from '../description/description.vue';
import {PanelEnums} from '../../scripts/models/panel-enums';
import {useStore} from 'vuex';

export default defineComponent({
    name: "App",
	components: {
		Calculator,
		Result,
		Description
	},
    setup() {
		const store = useStore();

		const showWindow = computed({
			get() {
				return store.getters.GET_PANEL;
			},
			set() {}
		})

		return {
			showWindow,
			PanelEnums
		}
    }
})
