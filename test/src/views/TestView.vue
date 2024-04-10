<template>
  <div class="Test">
    <h1>This is a test page</h1>
    <TestPage :activity="myActivity"/>
  </div>
</template>
  
<script>
// @ is an alias to /src
import TestPage from '@/components/TestPage.vue'
import { ref } from "vue";

export default {
  name: 'TestView',
  components: {
    TestPage
  },
  setup() {
    const myActivity = ref('some activity');

    return {
      myActivity
    }
  },
}
</script>