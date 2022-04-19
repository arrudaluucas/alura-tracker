<template>
  <section>
    <strong class="display">{{ tempoDecorrido }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CronometroTracker',
    props: {
        tempoEmsegundos: {
            type: Number,
            default: 0
        }
    },
    computed: {
      tempoDecorrido () : string {
          return new Date(this.tempoEmsegundos * 1000).toISOString().substr(11,8)
      }
  },
})
</script>

<style>
.display {
  color: var(--trexto-primario);
}
</style>
