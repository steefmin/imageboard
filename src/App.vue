<template>
  <div id="app">
    <div class="columns">
      <div class="column">
        <ipfs-info />
      </div>
      <div class="column">
        <peer-list />
      </div>
      <div class="column">
        <image-list />
      </div>
      <div class="column">
        <hash-input />
      </div>
    </div>

  </div>
</template>

<script>
import IpfsInfo from "./components/IpfsInfo.vue";
import PeerList from '@/components/PeerList'
import ImageList from '@/components/ImageList'
import HashInput from '@/components/HashInput'

export default {
  name: "app",
  components: {
    HashInput,
    ImageList,
    PeerList,
    IpfsInfo
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
