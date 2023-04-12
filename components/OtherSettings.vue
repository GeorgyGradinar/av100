<template>

  <div class="wrapper-block">
    <div class="title">Прочие настройки</div>

    <article>

      <div class="form-control">
        <section class="wrapper-dropdown">
          <p>Часовой пояс</p>

          <div class="dropdown">
            <div class="select" @click="toggleOpenMenu" >
              <span class="selected">{{ selectedCity }}</span>
              <img src="../static/expand_more.svg" :class="{'rotate': isOpenDropDown }">
            </div>

            <ul class="menu" :class="{'menu-open': isOpenDropDown }">
              <li v-for="city of cities" :key="city.id"
                  @click="selectionCity(city)"
                  :class="{'active': selectedCity === city }">
                <img class='image-select-city' src="../static/done.svg" :class="{'active': selectedCity === city }">
                {{ city }}
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section class="form-control">
        <label class="wrapper-form">
          <input type="checkbox" class="checkbox" name="checkbox"/>
          <span class="custom-checkbox"></span>
          <span class="label">Автоматически переходить к новым объявлениям</span>
        </label>
        <information :text="textInfoForAutoParams"></information>
      </section>

      <section class="form-control">
        <label class="wrapper-form">
          <input type="checkbox" class="checkbox" name="checkbox"/>
          <span class="custom-checkbox"></span>
          <span class="label">Включить цвета в ленте</span>
        </label>
        <information :text="textInfoForTurnOnColor"></information>
      </section>

    </article>
  </div>

</template>

<script>

// import ClickOutside from 'vue-click-outside'
import information from "~/components/information";

export default {
  name: "OtherSettings",

  components: {
    information
  },

  // directives: {
  //   ClickOutside
  // },

  data() {
    return {
      isOpenDropDown: false,
      cities: ['Калининград', 'Москва', 'Самара', 'Екатеринбург', 'Омск', 'Красноярск', 'Иркутск', 'Якутск', 'Владивосток', 'Магадан', 'Камчатка'],
      selectedCity: 'Самара',
      textInfoForAutoParams: 'Лента будет автоматически обновляться 1 раз в 3 секунды',
      textInfoForTurnOnColor: 'Включение зеленого/желтого цвета'
    }
  },

  methods: {
    toggleOpenMenu() {
      this.isOpenDropDown = !this.isOpenDropDown;
    },

    selectionCity(city) {
      this.selectedCity = city;
      this.isOpenDropDown = false;
    },

    clickOutSide() {
      this.isOpenDropDown = false;
    }
  }
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

article {
  width: 490px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-control {
  width: 370px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control .wrapper-dropdown {
  display: flex;
  align-items: center;
  gap: 30px;
}

.form-control .wrapper-form {
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-control p {
  font-size: 14px;
  font-weight: 500;
}

.checkbox {
  display: none;
}

.custom-checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid #2dc574;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
}

.custom-checkbox::before {
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #2dc574;
  background-size: contain;
  background-image: url("../static/done.svg");
  opacity: 0;
  transition: .2s;
}

.checkbox:checked + .custom-checkbox::before {
  opacity: 1;
}

.label {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  width: 250px;
}

.select {
  width: 215px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px #cdcdcd solid;
  border-radius: 3px;
  font-weight: 500;
  padding: 0 10px;
  transition: 0.2s;
  cursor: pointer;
}

.select:hover {
  border: 1px #2dc574 solid;
}

.select img {
  transition: 0.3s;
  width: 15px;
}

.select img.rotate {
  transform: rotate(180deg);
}

.selected {
  font-size: 14px;
}

.menu {
  height: 300px;
  overflow: auto;
  position: absolute;
  list-style: none;
  width: 215px;
  background-color: #2dc574;
  border-radius: 5px;
  color: #fff;
  opacity: 0;
  display: none;
  transition: .2s;
  z-index: 1;
}

.menu::-webkit-scrollbar {
  width: 6px;
}

.menu::-webkit-scrollbar-track {
  background-color: #ededed;
  border-radius: 10px;
}

.menu::-webkit-scrollbar-thumb {
  background-color: #cdcdcd;
  border-radius: 10px;
  transition: 0.3s;
}

.menu::-webkit-scrollbar-thumb:hover {
  background-color: #2dc574;
}

.menu li {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.menu li:hover {
  background-color: #22a860;
}

.active {
  background-color: #22a860;
}

.active img {
  visibility: visible;
}

.menu-open {
  display: block;
  opacity: 1;
}

.image-select-city {
  visibility: hidden;
  width: 15px;
  height: 15px;
}
</style>
