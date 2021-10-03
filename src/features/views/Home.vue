<template>
  <div class="page">
    <portal to="toolbar">
      <!--      <b-form-input type="search"></b-form-input>-->
    </portal>
    <b-button
      variant="warning"
      class="btn__create_board"
      v-b-modal.create-board
    >
      <box-icon name="plus" size="sm" color="white"></box-icon>
    </b-button>
    <CreateBoardForm></CreateBoardForm>
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CreateBoardForm from "@/shared/components/CreateBoardForm.vue";

@Component({
  components: { CreateBoardForm },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.btn__create_board {
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 50%;
  line-height: 0;
  padding: 15px;
}

@media (max-width: 750px) {
  .btn__create_board {
    bottom: 75px;
    right: 25px;
  }
}
</style>
