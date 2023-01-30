import {defineComponent, ref, Ref, watch, defineEmits} from "vue";

export default defineComponent({
	name: "Input",
	props: {
		id: String,
		label: String,
		placeholder: Number
	},
	setup(props) {
		const value: Ref<number> = ref(null);

		const emit = defineEmits(['setValue']);

		watch(() => value, (newVal) => {
			emit('setValue', newVal);
		});

		return {
			value
		}
	}
})
