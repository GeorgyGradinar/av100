<template>

  <div class="wrapper-block">
    <div class="title">Переход в карточку</div>

    <article>
      <span class="title-block">Выберите, каким образом будет открываться детальное представление выбранного вами транспорта.</span>

      <form class="form-control">
        <div class="checkbox">
          <input type="radio" id="this-page" name="type-card" value="В карточку в текущем окне"/>
          <label for="this-page" class="label">В карточку в текущем окне</label>
        </div>

        <div class="checkbox">
          <input type="radio" id="other-page" name="type-card" value="В карточку в отдельном окне"/>
          <label for="other-page" class="label">В карточку в отдельном окне</label>
        </div>

        <div class="checkbox source">
          <div>
            <input type="radio" id="page" name="type-card" value="На источник"/>
            <label for="page" class="label">На источник</label>
          </div>
          <information :text="textInfoForSource"></information>
        </div>
      </form>

    </article>
  </div>

</template>

<script>
export default {
  name: "GoToCard",

  data() {
    return {
      textInfoForSource: 'Прямой переход в объявление на источнике',
    }
  },
}
</script>

<style scoped>

.wrapper-block {
  display: flex;
}

.title {
  width: 250px;
  font-weight: 600;
  font-size: 15px;
}

.title-block {
  display: inline-block;
  width: 490px;
  font-size: 14px;
  font-weight: 400;
  color: #686869;
}

article {
  width: 490px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-control{
  width: 370px;
}

.checkbox {
  display: flex;
  gap: 5px;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
}

.checkbox:last-of-type {
  margin-bottom: 0;
}

.checkbox:not(:last-of-type):after {
  content: '';
  position: absolute;
  top: 35px;
  left: 0;
  width: 370px;
  height: 1px;
  background-color: #e1e1e3;
}

.source {
  display: flex;
  justify-content: space-between;
}

.label {
  font-size: 14px;
  cursor: pointer;
  color: #686869
}

</style>
