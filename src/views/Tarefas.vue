<template>
  <FormularioTracker @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <TarefaTracker
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
    />
    <BoxTracker v-if="listaEstaVazia">
      Você não está muito produtivo hoje :(
    </BoxTracker>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import FormularioTracker from "../components/Formulario.vue";
import TarefaTracker from "../components/Tarefa.vue";
import ITarefa from "../Interfaces/ITarefa";
import BoxTracker from "../components/Box.vue";
import { useStore } from "@/store";
import { ADICIONA_TAREFA } from "@/store/tipo-mutacoes";

export default defineComponent({
  name: "TarefasTracker",
  components: {
    FormularioTracker,
    TarefaTracker,
    BoxTracker,
  },
  setup() {
    const store = useStore();
    return {
      tarefas: computed(() => store.state.tarefas),
      store,
    };
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.store.commit(ADICIONA_TAREFA, tarefa);
    },
  },
});
</script>
