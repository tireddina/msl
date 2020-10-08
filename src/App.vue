<template>
  <div id="app">
    <ElementTable/>
     <Timer />
     <MSLtable/>
    
    
  </div>
</template>

<script>
import ElementTable from './components/element.vue'
import Timer from './components/timer.vue'
import MSLtable from './components/msltable.vue'


export default {
  name: 'App',
  components: {
    
    ElementTable,
    Timer,
    MSLtable,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
