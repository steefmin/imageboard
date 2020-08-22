<template>
  <div>
    <div class="tile" v-for="image in images" :key="image.id">
      <img :src="'data:image;base64,' + image.data">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageList',
  data: function() {
    return {
      images: []
    }
  },
  methods: {
    async setupSub() {
      try {
        const ipfs = this.$ipfs

        await ipfs.pubsub.subscribe('imageboard', this.handleMessage())
      } catch (err) {
        console.error(err)
      }
    },
    async handleMessage(message) {
      const hash = message.data.toString();
      console.log('received: ' + hash)
      const image = await this.getImage(hash)

      this.images.push({
        id: hash,
        data: image
      })
    },
    async getImage(hash) {
      try {
        const ipfs = await this.$ipfs;
        const chunks = []
        for await (const chunk of ipfs.cat(hash)) {
          chunks.push(chunk)
        }
        return Buffer.concat(chunks).toString("Base64")
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
