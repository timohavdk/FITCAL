import {computed, defineComponent, ref, Ref} from 'vue';
import {ButtonIconsEnums} from './enums/button-icons-enums';

export default defineComponent({
	name: "Description",
	setup() {
		/** Показывается ли описание */
		const isShown: Ref<boolean> = ref(false);

		/** Показывается ли панель описания */
		const isPanelShown: Ref<boolean> = ref(false);

		/** Значение иконки для кнопки*/
		const buttonIcon = computed({
			get() {
				return isShown.value ? ButtonIconsEnums.ARROW : ButtonIconsEnums.QUESTIONS;
			},
			set() {}
		})

		/** Обработчик нажатия на кнопку */
		function clickHandler() {
			if (isShown.value) {
				isPanelShown.value = false;
				setTimeout(() => {
					isShown.value = false;
				}, 100)
			}
			else {
				isShown.value = true;
				setTimeout(() => {
					isPanelShown.value = true;
				}, 100)
			}
		}

		return {
			isShown,
			isPanelShown,
			buttonIcon,
			clickHandler
		}
	}
})
