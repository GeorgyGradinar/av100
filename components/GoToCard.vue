<template>
  <SectionWrapper :title="'Переход в карточку'">
    <article>
      <span class="title-block">Выберите, каким образом будет открываться детальное представление выбранного вами транспорта.</span>

      <form class="form-control">
        <div class="checkbox">
          <input type="radio" id="this-page" name="type-card" value="0" :checked="user.redirecttarget === 0"/>
          <label for="this-page" class="label">В карточку в текущем окне</label>
        </div>

        <div class="checkbox">
          <input type="radio" id="other-page" name="type-card" value="1" :checked="user.redirecttarget === 1"/>
          <label for="other-page" class="label">В карточку в отдельном окне</label>
        </div>

        <div class="checkbox source">
          <div>
            <input type="radio" id="page" name="type-card" value="2" :checked="user.redirecttarget === 2"/>
            <label for="page" class="label">На источник</label>
          </div>
          <information :text="'Прямой переход в объявление на источнике'"></information>
        </div>
      </form>

    </article>
  </SectionWrapper>
</template>

<script>
import SectionWrapper from "~/components/SectionWrapper";

export default {
  name: "GoToCard",
  components: {SectionWrapper},

  data() {
    return {
      typeRedirect: null
    }
  },

  computed: {
    user() {
      return this.$store.state.user;
    }
  },
}
</script>

<style scoped>

article {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.checkbox {
  display: flex;
  gap: 5px;
  align-items: center;
  position: relative;
  padding: 15px 0;
}

.checkbox:last-of-type {
  margin-bottom: 0;
}

.checkbox:not(:last-of-type) {
  border-bottom: 1px solid var(--light-grey-color);
}

.source {
  display: flex;
  justify-content: space-between;
}

.label {
  font-size: 14px;
  cursor: pointer;
  color: var(--grey-color);
}

@media screen and (min-width: 767px) and (max-width: 990px) {
  .checkbox {
    padding: 15px 0
  }

  .label {
    font-size: 12px;
  }
}

@media screen and (max-width: 767px) {
  .checkbox {
    padding: 10px 0;
  }

  .checkbox:not(:last-of-type) {
    border-bottom: unset;
  }
}
</style>
