import { defineComponent, ref, Ref, watch } from "vue";

export default defineComponent({
    name: "Button",
	props: {
		title: String,
		errorMessage: String,
		isErrorShow: Boolean,
	},
	emits: ['click-on-button'],
    setup(props, { emit }) {
        /** Активная ли кнопка */
        const isActive: Ref<boolean> = ref(false);

        /** Наведен ли на кнопку курсор */
        const isHover: Ref<boolean> = ref(false);

	    /** Наведен ли на кнопку курсор */
	    const isShowingError: Ref<boolean> = ref(false);

        /**
         * Обработчик нажатия на клавишу
         * */
        function clickHandler() {
			emit('click-on-button');

            isActive.value = !isActive.value;

            setTimeout(() => {
                isActive.value = !isActive.value;
            }, 300);
        }

        /**
         * Обработчик наведения на конпку
         * */
        function mouseOverHandler() {
            isHover.value = true;
        }

        /**
         * Обработчик отвода от конпки
         * */
        function mouseLeaveHandler() {
            isHover.value = false;
        }

		watch(() => props.isErrorShow, (value: boolean) => {
			if (value) {
				setTimeout(() => {
					isShowingError.value = true;
				}, 100)
			}
			else {
				setTimeout(() => {
					isShowingError.value = false;
				}, 100)
			}
		})

        return {
            isActive,
            isHover,
	        isShowingError,
            clickHandler,
            mouseOverHandler,
            mouseLeaveHandler
        }
    }
})
