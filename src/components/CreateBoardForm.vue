<template>
  <b-modal
    id="create-board"
    class="create-board"
    size="md"
    centered
    hide-header
    hide-footer
  >
    <b-form>
      <h2>Создание доски</h2>

      <b-form-group label="Название доски:" class="create-board__group">
        <b-form-input type="text" placeholder="Введите название...">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Уникальный id:" class="create-board__group">
        <b-form-input type="text" placeholder="Введите id..."> </b-form-input>
      </b-form-group>
      <b-form-group class="create-board__group">
        <b-button type="submit" class="btn__create_board bg-warning"
          >Создать</b-button
        >
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CreateBoardForm extends Vue {}
</script>

<style lang="scss" scoped>
.create-board {
  &__group {
    margin-top: 20px;
  }
}

.btn__create_board {
  border: none;
  transition-duration: 0.2s;
}

.btn__create_board:hover {
  background: $purple-color !important;
}
</style>
