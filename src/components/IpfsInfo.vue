<template>
  <div class="ipfs-info">
    <img id="image" class="ipfs-logo" alt="IPFS logo" v-bind:src="image"/>
    <h1>{{ status }}</h1>
    <h2>ID: {{ id }}</h2>
    <h2>Agent version: {{ agentVersion }}</h2>
    <peer-list/>
  </div>
</template>

<script>
import PeerList from '@/components/PeerList'
export default {
  name: 'IpfsInfo',
  components: {PeerList},
  data: function () {
    return {
      status: 'Connecting to IPFS...',
      id: '',
      agentVersion: '',
      image: '../assets/logo.svg'
    }
  },
  mounted: function () {
    this.getIpfsNodeInfo()
    this.getImage()
  },
  methods: {
    async getIpfsNodeInfo () {
      try {
        // Await for ipfs node instance.
        const ipfs = await this.$ipfs
        // Call ipfs `id` method.
        // Returns the identity of the Peer.
        const {agentVersion, id} = await ipfs.id()
        this.agentVersion = agentVersion
        this.id = id
        // Set successful status text.
        this.status = 'Connected to IPFS =)'
      } catch (err) {
        // Set error status text.
        this.status = `Error: ${err}`
      }
    },
    async getImage() {
      try {
        const ipfs = await this.$ipfs;
        const chunks = []
        for await (const chunk of ipfs.cat('QmNdUGdjQDbUoDcJxjnnzbdqXsvrpZqsvMXggYDcjHsvcQ')) {
          chunks.push(chunk)
        }
        let image = Buffer.concat(chunks).toString("Base64")
        console.log('image', image)
        this.image = 'data:image;base64,' + image;
      } catch (err) {
        console.error(err)
      }
    }
  }
}


</script>

<style scoped>
.ipfs-logo {
  height: 10rem;
}
</style>
