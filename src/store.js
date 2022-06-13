// store.js
import { reactive } from 'vue'

export const store = reactive({
  items: [
    { id: 1, label: "Item 1", purchased: false, highPriority: false },
    { id: 2, label: "Item 2", purchased: true, highPriority: false },
    { id: 3, label: "Item 3", purchased: false, highPriority: true },
  ],
  editing: false
})