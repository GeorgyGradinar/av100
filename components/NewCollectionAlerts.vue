<template>

  <div class="wrapper-block">
    <div class="title">Оповещения о новых подборках</div>

    <article>
      <span class="title-block">Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии вашей подборки.</span>

      <form class="form-control">
        <h1>Уведомления</h1>

        <div class="checkbox">
          <section class="block-input">
            <input type="radio" id="Выкл" name="type-card" value="Выкл"/>
            <label for="Выкл" class="label">Выкл</label>
          </section>
        </div>

        <div class="checkbox">
          <section class="block-input">
            <input type="radio" id="Push" name="type-card" value="Push"/>
            <label for="Push" class="label">Push</label>
          </section>
          <information :text="textInfoForPush"></information>
        </div>

        <div class="checkbox">
          <section class="block-input">
            <input type="radio" id="Email" name="type-card" value="Email"/>
            <label for="Email" class="label">Email</label>
          </section>

          <section class="block-edit">
            <input type="text" v-if="isEditMAil" v-model="dataMail">
            <p v-if="user.id && !isEditMAil">{{ dataMail }}</p>
            <button type="button" @click="changeDataMail" v-if="!isEditMAil">
              <img src="../static/edit.svg" alt="">
            </button>
          </section>
        </div>

        <div class="checkbox">
          <section class="block-input">
            <input type="radio" id="Telegram" name="type-card" value="Telegram"/>
            <label for="Telegram" class="label">
              <a class="telegram" href="https://t.me/BotAvinfo_bot" target="_blank">Telegram ID</a>
            </label>
          </section>

          <section class="block-edit">
            <input type="text" v-if="isEditTelegram">
            <button type="button" @click="changeTelegram" v-if="!isEditTelegram">
              <img src="../static/edit.svg" alt="">
            </button>
          </section>
        </div>
      </form>
    </article>
  </div>


</template>

<script>
export default {
  name: "NewCollectionAlerts",

  data() {
    return {
      test: '',
      dataMail: '',
      isEditMAil: false,
      isEditTelegram: false,
      textInfoForPush: 'Можно установить только в приложении',
    }
  },

  methods: {
    changeDataMail() {
      this.isEditMAil = true;
    },

    changeTelegram() {
      this.isEditTelegram = true;
    },
  },

  computed: {
    user() {
      this.dataMail = this.$store.state.user.email;
      return this.$store.state.user;
    }
  },
  mounted() {
    this.$store.dispatch('getUserData');
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

.checkbox {
  width: 370px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 30px 0
}

.checkbox:not(:last-of-type) {
  border-bottom: 1px solid #e1e1e3;
}

.checkbox:first-of-type {
  padding: 0 0 30px 0;
}

.label {
  font-size: 14px;
  cursor: pointer;
  color: #686869
}

.block-input {
  display: flex;
  gap: 5px;
}

.block-edit {
  display: flex;
}

.form-control h1 {
  font-size: 16px;
  margin-bottom: 20px;
}

.block-edit input {
  width: 240px;
  border: 1px solid #e1e1e3;
  padding: 6px 10px;
  font-size: 15px;
  font-weight: 400;
  color: #686869;
  border-radius: 3px;
}

.block-edit input:focus {
  outline: 0;
  outline-offset: 0;
  border: 1px solid #2dc574;
}

.block-edit p {
  font-size: 15px;
  color: #686869;
}

.block-edit button {
  border: none;
  background-color: #fff;
  margin-left: 5px;
  cursor: pointer;
}

.block-edit button img {
  width: 22px;
}

.telegram {
  color: #2dc574;
}

</style>
