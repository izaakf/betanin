<template lang="pug">
  #status
    p(v-show='Object.keys(status).length === 0') no status available
    p(v-for='count, key in status')
      b {{ countString(count) }}
      span#explaination  {{ explaination(key, count) }}
</template>

<script>
// import
import { mapGetters } from 'vuex'
// help
const statusMap = {
  /* eslint-disable key-spacing */
  ENQUEUED:    ['is in the queue', 'are in the queue'],
  PROCESSING:  ['is being processed', 'are being processed'],
  IGNORED:     ['is ignored', 'are ignored'],
  NEEDS_INPUT: ['needs input', 'need input'],
  COMPLETED:   ['is completed', 'are completed'],
  WAITING:     ['is waiting to finish', 'are waiting to finish']
}
// export
export default {
  computed: {
    ...mapGetters([
      'status'
    ])
  },
  methods: {
    countString (count) {
      const suffix = count === 1 ? '' : 's'
      return `${count} torrent${suffix}`
    },
    explaination (key, count) {
      const preExp = statusMap[key]
      return preExp instanceof Array
        ? preExp[Number(count !== 1)]
        : preExp
    }
  }
}
</script>

<style scoped>
  p {
    text-align: right;
  }
  #explaination {
    font-weight: normal;
  }
</style>
