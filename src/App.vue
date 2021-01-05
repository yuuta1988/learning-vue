<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
  </div>
</template>


<script>
import Myheader from './components/Myheader'

export default {
  name: 'App',
  components: {
    Myheader
  }
}
</script>
