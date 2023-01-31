import {defineComponent, ref, Ref} from "vue";
import store from "../../scripts/store";

export default defineComponent({
	name: "Input",
	props: {
		id: String,
		label: String,
		placeholder: Number,
		mode: String,
		isAccepted: Boolean,
	},
	emits: ['setValue'],
	setup(props, { emit }) {
		/** Введённое значение */
		const value: Ref<number> = ref(null);

		/** Сообщение об ошибке */
		const message: Ref<string> = ref('');

		/** Флаг наведения */
		const isHover: Ref<boolean> = ref(false);

		/** Флаг фокуса */
		const isFocus: Ref<boolean> = ref(false);

		/** Флаг показа ошибки */
		const isErrorShow: Ref<boolean> = ref(false);

		/** Константа ошибки */
		const ERROR_MESSAGE = 'Please, enter correct data';

		/**
		 * Обработчик отжатия клавиши
		 * */
		function keyUpHandler() {
			emit('setValue', value);
		}

		/**
		 * Обработчик фокуса
		 * */
		function focusHandler() {
			isFocus.value = true;
		}

		/**
		 * Обработчик наводки курсора
		 * */
		function mouseOverHandler() {
			isHover.value = true;
		}

		/**
		 * Обработчик отвода курсора
		 * */
		function mouseLeaveHandler() {
			isHover.value = false;
		}

		/**
		 * Обработчик blur
		 * */
		function blurHandler() {
			isFocus.value = false;
			console.log('condition r', null === this.$refs.input.value)
			console.log('condition v', null === value.value);
			console.log('value v', value.value, typeof value.value);
			console.log('value ref', this.$refs.input.value, typeof value.value);

			if (null === value.value) {

				return;
			}

			if ('weight' === props.mode && false === this.isAccepted) {
				message.value = ERROR_MESSAGE;
				showError();

				return;
			}

			if ('height' === props.mode && false === this.isAccepted) {
				message.value = ERROR_MESSAGE;
				showError();

				return;
			}

			isErrorShow.value = false;
			setTimeout(() => {
				message.value = '';
			}, 300)
		}

		function showError() {
			setTimeout(() => {
				isErrorShow.value = true;
			}, 100)
		}

		return {
			value,
			message,
			isHover,
			isFocus,
			isErrorShow,
			keyUpHandler,
			blurHandler,
			focusHandler,
			mouseOverHandler,
			mouseLeaveHandler
		}
	}
})
