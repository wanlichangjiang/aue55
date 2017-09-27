<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <!-- <hello></hello> -->
    <h1>{{ name }}</h1>
    {{ dbCurNum }}
    <h1 v-html="title"></h1>
    <h1 v-text="title"></h1>
    <h1 v-html="title"></h1>
    <input type="checkbox" v-model="checked" @keydown.enter="curIndex = 1">
    <p v-for="(value,index) in nav" 
    v-bind:title="value" :key="value" :class="{ on: index == curIndex }" v-on:click="show(index)">{{ index }}-{{ value }}</p>
    <button @click="isShow = !isShow">toggle</button>
    <p v-show="isShow">show</p>
    <p v-if="isShow">IF</p>
    <P v-else-if="!isShow">elseif</P>
    <p v-else="isShow">else</p>
    <p :style="{'margin-left:20px': dbCurNum }">haha</p>
  </div>
</template>

<script>
// import hello from './components/Hello'
export default {
  name: 'app',
  // components: {
  //   hello
  // }
  data () {
    return {
      title: '<h1>二货</h1>',
      name: '刘',
      checked: false,
      isShow: false,
      nav: ['首页', '产品介绍'],
      curIndex: 0
    }
  },
  methods: {
    show (index) {
      this.curIndex = index
    }
  },
  computed: {
    dbCurNum () {
      return this.curIndex * 10 + '%'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
[v-cloak]{
  display: none;
}
</style>
