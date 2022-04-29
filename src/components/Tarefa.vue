<template>
  <BoxTracker>
    <div class="columns">
      <div class="column is-4">
        {{ tarefa.descricao || "Tarefa sem descrição" }}
      </div>
      <div class="column is-3">
        {{ tarefa.projeto?.nome || 'N/D'}}
      </div>
      <div class="column">
        <CronometroTracker :tempoEmsegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </BoxTracker>
</template>

<script lang="ts">
import ITarefa from "@/Interfaces/ITarefa";
import { defineComponent, PropType } from "vue";
import CronometroTracker from "./Cronometro.vue";
import BoxTracker from "./Box.vue";

export default defineComponent({
  name: "TarefaTracker",
  components: {
    CronometroTracker,
    BoxTracker,
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
});
</script>