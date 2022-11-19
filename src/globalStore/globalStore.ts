import { defineStore } from "pinia"
import { ref } from "vue"

export const useCounterStore = defineStore('sideMuneVisible', () => {
    const visible = ref(true)
    function close() {
        visible.value = false
    }
    function open() {
        visible.value = true
    }

    return { visible, close, open }
})