<template>
  <div>
    <b-field label="Hash">
      <b-input v-model="hash"
      type="string" v-on:keydown="submit()"></b-input>
    </b-field>
    <template>
      <section>
        <b-button @click="submit()">Click Me</b-button>
      </section>
    </template>
  </div>
</template>

<script>
export default {
  name: 'HashInput',
  data: function () {
    return {
      hash: ''
    }
  },
  methods: {
    submit() {
      // if (event.key !== 'Enter') {
      //   return
      // }

      this.publish(this.hash)
    },
    async publish(hash) {
      try {
        const ipfs = this.$ipfs

        await ipfs.pubsub.publish('imageboard', hash)
        console.log('published: ' + hash)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
