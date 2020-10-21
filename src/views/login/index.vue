<template>

  <div>{{ num }}</div>
  <div>{{ data.num }}</div>
  <div>{{ data.doubleNum }}</div>
  <router-link to="Dashboard">Dashboard</router-link>
</template>
<script>
import { ref,computed, reactive } from 'vue'
export default {
  name: 'Login',
  setup() {
    const num = ref(100)
    const data = reactive({
      num: 1,
      doubleNum: computed(() => data.num * 2)
    })
    return { data,num }
  }
}
</script>
