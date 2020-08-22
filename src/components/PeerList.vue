<template>
  <div>
    <h2>Connected nodes: {{ swarm.length }}</h2>
    <p>last updated: {{ time }}</p>
    <ul id="swarm">
      <li v-for="addr in swarm" :key="addr.id">
        {{ addr.id }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PeerList',
  data: function () {
    return {
      swarm: [],
      time: ''
    }
  },
  mounted () {
    this.listSwarm()
    setInterval(() => {
      this.listSwarm()
    }, 30000)
  },
  methods: {
    async listSwarm () {
      try {
        const ipfs = await this.$ipfs
        this.swarm = await ipfs.swarm.addrs()
        const time = new Date()
        this.time = time.toTimeString().substring(0, 8)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped>
#swarm {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-family: monospace;
}
</style>
