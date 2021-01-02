<template>
  <div id="app">
    <myheader></myheader>
    <router-view :options="options"/>
  </div>
</template>


<script>
import myheader from './components/myheader'

const options = [
  { id: 1, name: '北海道'},
  { id: 2, name: '青森県'},
  { id: 3, name: '岩手県'},
  { id: 4, name: '宮城県'},
  { id: 5, name: '秋田県'},
  { id: 6, name: '山形県'},
  { id: 7, name: '福島県'},
  { id: 8, name: '茨城県'},
  { id: 9, name: '栃木県'},
  { id: 10, name: '群馬県'},
  { id: 11, name: '埼玉県'},
  { id: 12, name: '千葉県'},
  { id: 13, name: '東京都'},
];

export default {
  name: 'App',
  components: {
    myheader
  },
  data(){
    return {
      options: options
    }
  }
}
</script>
