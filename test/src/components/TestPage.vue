<template>
    <div class="hello">
      <h1>{{ activity }}</h1>
      <h1>{{ type }}</h1>
      <h1>{{ participants }}</h1>
      <h1>{{ price }}</h1>
      <h1>{{ link }}</h1>
      <h1>{{ keyVal }}</h1>
      <h1>{{ accessibility }}</h1>
    </div>
  </template>
  
  <script>
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
    }
  }
  </script>
  