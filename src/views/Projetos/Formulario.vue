<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Proejto </label>
        <input
          type="text"
          v-model="nomeDoProjeto"
          id="nomedoProjeto"
          class="input"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { TipoNotificacao } from "@/Interfaces/INotificacao";
import useNotificador from "@/hooks/notificador";
import { ALTERAR_PROJETOS, CADASTRAR_PROJETOS } from "@/store/tipo-acoes";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "FomularioProjeto",
  props: {
    id: {
      type: String,
    },
  },
  // permite configurar o componente ( composition API )
  setup(props) {

    const store = useStore();
    const { notificar } = useNotificador();
    const nomeDoProjeto = ref("")
    const router = useRouter()

    if (props.id) {
      const projeto = store.state.projeto.projetos.find(
        (proj) => proj.id == props.id
      );
      nomeDoProjeto.value = projeto?.nome || "";
    }

    const lidarComSucesso = () => {
      nomeDoProjeto.value = "";
      notificar(
        TipoNotificacao.SUCESSO,
        "Excelente!",
        "O projeto foi cadastrado com sucesso!"
      );
      router.push("/projetos");
    }

    const salvar = () => {
      if (props.id) {
        store
          .dispatch(ALTERAR_PROJETOS, {
            id: props.id,
            nome: nomeDoProjeto.value,
          })
          .then(() => {
            lidarComSucesso();
          });
      } else {
        store.dispatch(CADASTRAR_PROJETOS, nomeDoProjeto.value).then(() => {
          lidarComSucesso();
        });
      }
    }

    return {
      nomeDoProjeto,
      salvar
    };
  },
});
</script>
