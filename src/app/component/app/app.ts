import {defineComponent, ref, Ref} from "vue";
import Calculator from '../calculator/calculator.vue';
import Result from '../result/result.vue';

export default defineComponent({
    name: "App",
	components: {
		Calculator,
		Result
	},
    setup() {
		const CALCULATOR: string = 'calculator';

		const RESULT: string = 'result';

		const showWindow: Ref<string> = ref(CALCULATOR);

	    function calculateHandler() {
			showWindow.value = RESULT;
	    }

		return {
			CALCULATOR,
			RESULT,
			showWindow,
			calculateHandler
		}
    }
})
