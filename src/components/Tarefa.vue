<template>
  <BoxTracker>
    <div class="columns clicavel" @click="tarefaClicada">
      <div class="column is-4">
        {{ tarefa.descricao || "Tarefa sem descrição" }}
      </div>
      <div class="column is-3">
        {{ tarefa.projeto?.nome || "N/D" }}
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
  emits: ['aoTarefaClicada'],
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
  setup(props, { emit }) {
    const tarefaClicada = () => {
      emit('aoTarefaClicada', props.tarefa)
    }

    return {
      tarefaClicada
    }
  }
});
</script>

<style scoped>
.clicavel {
  cursor: pointer;
}
</style>