<template>
  <div>
      <table width="300" height="100" class="tabla">
      <tbody>
        <tr>
          <td>
            <input
              class="btnSave"
              type="button"
              alt="Share"
              id="share"
              @click="guardarApp()"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";

export default {
    methods: {
    navegar(destino) {
      this.$router.push(destino);
    },

    ...mapActions(["guardarApp"]),
  },
}
</script>

<style>

</style>