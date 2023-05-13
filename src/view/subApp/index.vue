<template>
  <div>
    <div id="sub-app-container"></div>
  </div>
</template>

<script setup lang="ts">
import { loadMicroApp, MicroApp } from 'qiankun'
let microApp: null | MicroApp = null
const loadApp = () => {
  if (microApp) return 
  microApp = loadMicroApp({
    name: 'subApp',
    entry: 'http://localhost:5174',
    container: '#sub-app-container',
    props: {}
  })
}
loadApp()
</script>

<style>

</style>