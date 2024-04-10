<template>
    <div class="hello">
      <h1>{{ activity }}</h1>

      <div>
        {{ count }}
      </div>
      <div>
        {{ captions }}
      </div>
      <div>
        <button @click="increment">Increment Count</button>
        <button @click="getCaptions">Get Captions</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  export default {
    name: 'TestPage',
    props: {
      activity: String,
      type: String,
      participants: Number,
      price: Number,
      link: String,
      keyVal: String,
      accessibility: Number
    },
    setup() {
      const count = ref(0);
      const captions = ref({});

      const increment = () => {
        count.value += 2;
      }

      const getCaptions = async () => {
        const response = await fetch('/api/users',
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        });
        captions.value = await response.json();
      }

      return {
        count,
        captions,
        increment,
        getCaptions
      };
    }
  }
  </script>
  