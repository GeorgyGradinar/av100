<template>
  <SectionWrapper :title="'Прочие настройки'">

    <article>
      <section class="form-control">
        <div class="wrapper-dropdown">
          <p>Часовой пояс</p>

          <div class="dropdown">
            <div class="select" @click="toggleOpenMenu" v-click-outside="clickOutSide">
              <span class="selected">{{ selectedCityName }}</span>
              <img src="../static/expand_more.svg" :class="{'rotate': isOpenDropDown }" alt="arrow down">
            </div>

            <ul class="menu" :class="{'menu-open': isOpenDropDown }">
              <li v-for="city of cities" :key="city.id"
                  @click="selectionCity(city)"
                  :class="{'active': selectedCity === city.id}">
                <img class='image-select-city' src="../static/done.svg" :class="{'active': selectedCity === city.id }" alt="done">
                {{ city.label }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="form-control">
        <label class="wrapper-form">
          <input type="checkbox" class="checkbox" name="checkbox" :checked="isAutoRedirectEnabled"/>
          <span class="custom-checkbox"></span>
          <span class="label">Автоматически переходить к новым объявлениям</span>
        </label>
        <information :text="'Лента будет автоматически обновляться 1 раз в 3 секунды'"></information>
      </section>

      <section class="form-control">
        <label class="wrapper-form">
          <input type="checkbox" class="checkbox" name="checkbox" :checked="isColorEnabled"/>
          <span class="custom-checkbox"></span>
          <span class="label">Включить цвета в ленте</span>
        </label>
        <information :text="'Включение зеленого/желтого цвета'"></information>
      </section>

    </article>
  </SectionWrapper>
</template>

<script>

import ClickOutside from 'vue-click-outside'
import information from "~/components/Information";
import {CITIES} from "~/config";

export default {
  name: "OtherSettings",

  components: {
    information
  },

  directives: {
    ClickOutside
  },

  data() {
    return {
      isOpenDropDown: false,
      cities: CITIES,
      selectedCity: 'Moscow',
      selectedCityName: 'Москва',
      isColorEnabled: false,
      isAutoRedirectEnabled: false,
    }
  },

  methods: {
    toggleOpenMenu() {
      this.isOpenDropDown = !this.isOpenDropDown;
    },

    selectionCity(city) {
      this.selectedCityName = city.label;
      this.selectedCity = city.id;
      this.isOpenDropDown = false;
    },

    clickOutSide() {
      this.isOpenDropDown = false;
    }
  },

  computed: {
    user() {
      return this.$store.state.user;
    }
  },

  watch: {
    user() {
      this.isColorEnabled = this.user.colorlenta;
      this.isAutoRedirectEnabled = !this.user.locklentaupdate;
      this.selectedCity = this.user.timezonestring;
      this.selectedCityName = this.cities.find(city => city.id === this.selectedCity)?.label;
    }
  }
}
</script>

<style scoped>

article {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.form-control .wrapper-form {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
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
  border: 1px solid var(--main-green-color);
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
  background-color: var(--main-green-color);
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

@media screen and (max-width: 990px) and (min-width: 767px) {
  .form-control p {
    font-size: 12px;
  }

  .custom-checkbox {
    width: 15px;
    height: 15px;
  }

  .label {
    width: 200px;
    font-size: 9px;
  }
}

@media screen and (max-width: 767px) {
  .form-control .wrapper-dropdown {
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    width: 100%;
  }

  .form-control p {
    font-weight: 600;
    font-size: 15px;
  }
}

</style>
