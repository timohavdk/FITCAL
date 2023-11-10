import {defineComponent, ref, Ref, computed, onMounted} from "vue";
// import Calculator from '../calculator/calculator.vue';
// import Result from '../result/result.vue';
// import Description from '../description/description.vue';
// import {PanelEnums} from '../../scripts/models/panel-enums';
// import {useStore} from 'vuex';

export default defineComponent({
    name: "App",
	components: {
	// 	Calculator,
	// 	Result,
	// 	Description
	},
    setup() {
        const appsInfo = ref<string>('');

        onMounted( async () => {
            const result = await (<any>navigator).getInstalledRelatedApps();
            appsInfo.value = JSON.stringify(result);
            console.log('Apps info', appsInfo.value);
        })
		// const store = useStore();

		// const showWindow = computed({
		// 	get() {
		// 		return store.getters.GET_PANEL;
		// 	},
		// 	set() {}
		// })

		return {
            appsInfo,
			// showWindow,
			// PanelEnums
		}
    }
})
