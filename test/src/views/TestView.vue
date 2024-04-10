<template>
    <div class="Test">
      <h1>This is a test page</h1>
      <TestPage msg="Welcome to Your Vue.js App"/>
    </div>
  </template>
  
<script>
// @ is an alias to /src
import TestPage from '@/components/TestPage.vue'

export default {
  name: 'TestView',
  components: {
    TestPage
  }
}
</script>