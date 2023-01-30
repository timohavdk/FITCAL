import {defineComponent, ref, Ref} from "vue";

export default defineComponent({
    name: "Main",
    setup() {
        const one: Ref<number> = ref(1);

        return {
            one
        }
    }
})
