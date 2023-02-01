import { defineComponent, ref, Ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
    name: "Button",
    setup() {
        /** Активная ли кнопка */
        const isActive: Ref<boolean> = ref(false);

        /** Наведен ли на кнопку курсор */
        const isHover: Ref<boolean> = ref(false);

        /**
         * Обработчик нажатия на клавишу
         * */
        function clickHandler() {
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

        return {
            isActive,
            isHover,
            clickHandler,
            mouseOverHandler,
            mouseLeaveHandler
        }
    }
})
