<script setup>
import { ref, computed } from 'vue'

const header = ref('Shopping List App')


const items = ref([
  {id: 1, label:"Item 1", purchased: false, highPriority: false},
  {id: 2, label:"Item 2", purchased: true, highPriority: false},
  {id: 3, label:"Item 3", purchased: false, highPriority: true},
])

const reversedItems = computed(()  => {
  return [...items.value].reverse()
})


const newItem = ref("")
const editing = ref(false)
const newItemHighPriority = ref(false)
const saveItem = () => {
  items.value.push({ id: items.value.length + 1, label: newItem.value, highPriority: newItemHighPriority.value})
  newItem.value = ""
  newItemHighPriority.value = ""
}

const doEdit = (e) => {
  editing.value = e
}

const togglePurchased = (item) => {
  item.purchased = !item.purchased
}

</script>

<template>
  <div class="header">
  	<h1>{{ header }}</h1>
    
		<button v-if="editing" class="btn" @click="doEdit(false)">
    Cancel
    </button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">
    Add Item
    </button>
	</div>
  
  
  <form class="add-item-form"
        v-if="editing"
        @submit.prevent="saveItem">
    
  <input v-model="newItem" type="text" placeholder="Add an item" />
  <label>
    <input type="checkbox" v-model="newItemHighPriority">
    High Priority
  </label>
    
    <button class="btn btn-primary" :disabled="newItem.length === 0">
      Save Item
    </button>

  </form>
  
  

  
	<ul>
    <li v-for="(item , i) in reversedItems" 
        @click="togglePurchased(item)"
        :key="item.id" 
        :class="{strikeout: item.purchased, priority: item.highPriority }"
        >
      {{ item.label }}
    </li>
  </ul>
  
  <p v-if="!items.length">
    Nothing to see here!
  </p>
</template>