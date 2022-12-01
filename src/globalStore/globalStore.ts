import { defineStore } from "pinia"
import { ref } from "vue"

const useCounterStore = defineStore('sideMenuVisible', () => {
    const visible = ref(false)
    function close() {
        visible.value = false
    }
    function open() {
        visible.value = true
    }

    return { visible, close, open }
})

export { useCounterStore }
