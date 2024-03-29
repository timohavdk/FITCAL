import {computed, defineComponent, ref, Ref} from 'vue';
import {ButtonIconsEnums} from './enums/button-icons-enums';

export default defineComponent({
	name: "Description",
	setup: function () {
		/** Показывается ли описание */
		const isShown = ref<boolean>(false);

		/** Показывается ли панель описания */
		const isPanelShown = ref<boolean>(false);

		/** Значение иконки для кнопки*/
		const buttonIcon = computed<string>(() => {
			return isShown.value ? ButtonIconsEnums.ARROW : ButtonIconsEnums.QUESTIONS;
		});

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
					console.log('revert-6')
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
