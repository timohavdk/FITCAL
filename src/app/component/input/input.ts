import {defineComponent, ref, Ref} from "vue";

export default defineComponent({
	name: "Input",
	props: {
		id: String,
		label: String,
		placeholder: Number,
		mode: String,
	},
	emits: ['setValue'],
	setup(props, { emit }) {
		/** Введённое значение */
		const value: Ref<number> = ref(null);

		/** Сообщение об ошибке */
		let message: Ref<string> = ref('');

		const ERROR_MESSAGE = 'Enter correct data';

		/**
		 * Обработчик отжатия клавиши
		 * */
		function keyUpHandler() {
			emit('setValue', value);
		}

		/**
		 * Обработчик blur
		 * */
		function blurHandler() {
			if (null === value.value) {

				return
			}
			console.log(props.mode);

			if ('weight' === props.mode && 610 < value.value) {
				message.value = ERROR_MESSAGE;

				return;
			}

			if ('height' === props.mode && 272 < value.value) {
				message.value = ERROR_MESSAGE;

				return;
			}

			message.value = '';
		}

		return {
			value,
			message,
			keyUpHandler,
			blurHandler
		}
	}
})
