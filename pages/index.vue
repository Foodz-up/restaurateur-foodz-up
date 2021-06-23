<template>
  <div class="m-4">
    Salut
  </div>
</template>

<script>

export default
{
  mounted () {
    this.socket = this.$nuxtSocket({
      channel: '/index'
    })
    /* Listen for events: */
    this.socket
      .on('someEvent', (msg, cb) => {
        console.log(msg, cb)
      })
  },
  methods: {
    method1 () {
      /* Emit events */
      this.socket.emit('method1', {
        hello: 'world'
      }, (resp) => {
        /* Handle response, if any */
      })
    }
  }
}
</script>

<style scoped>

</style>
