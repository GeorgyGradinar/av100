<template>
  <SectionWrapper :title="'Оповещения о новых подборках'">
    <article>
      <span class="title-block">Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии вашей подборки.</span>

      <h1>Уведомления</h1>

      <form class="form-control">

        <div class="checkbox">
          <section class="block-input">
            <input type="radio" id="Выкл" name="type-card" value="-1" :checked="alert === -1"/>
            <label for="Выкл" class="label">Выкл</label>
          </section>
        </div>

        <div class="checkbox">
          <section class="block-input">
            <input type="radio" id="Push" name="type-card" value="Push" disabled/>
            <label for="Push" class="label">Push</label>
          </section>
          <information :text="'Можно установить только в приложении'"></information>
        </div>

        <div class="checkbox">
          <section class="block-input">
            <input type="radio" id="Email" name="type-card" value="2" :checked="alert === 2"/>
            <label for="Email" class="label">Email</label>
          </section>

          <section class="block-edit">
            <input type="text" v-if="isEditMail" @input="debounceSearch()" v-model="mail">
            <p v-if="user.id && !isEditMail">{{ mail }}</p>
            <button type="button" @click="changeDataMail" v-if="!isEditMail">
              <img src="../static/edit.svg" alt="edit">
            </button>
          </section>
        </div>

        <div class="checkbox">
          <section class="block-input">
            <input type="radio" id="Telegram" name="type-card" value="1" :checked="alert === 1"/>

            <label for="Telegram" class="label">
              <a class="telegram" href="https://t.me/BotAvinfo_bot" target="_blank">Telegram ID</a>
            </label>
          </section>

          <section class="block-edit">
            <input type="text" v-if="isEditTelegram"  v-model="telegramChat">
            <p v-if="user.id && !isEditTelegram">{{ telegramChat }}</p>
            <button type="button" @click="changeTelegram" v-if="!isEditTelegram">
              <img src="../static/edit.svg" alt="">
            </button>
          </section>
        </div>
      </form>
    </article>
  </SectionWrapper>
</template>

<script>
export default {
  name: "NewCollectionAlerts",

  data() {
    return {
      mail: '',
      telegramChat:'',
      alert:'',
      isEditMail: false,
      isEditTelegram: false,
      debounceTimeout:0,
    };
  },

  methods: {
    changeDataMail() {
      this.isEditMail = true;
    },

    changeTelegram() {
      this.isEditTelegram = true;
    },

    debounceSearch() {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }

      let currentData = {
        ...this.$store.state.user,
        email: this.mail
      };
      this.debounceTimeout = setTimeout(() => {
        this.$store.commit("setUser", currentData)
        this.$emit('email', this.mail);
      }, 500);
    }
  },

  computed: {
    user() {
      this.mail = this.$store.state.user.email;
      this.alert = this.$store.state.user.sendMethod;
      this.telegramChat = this.$store.state.user.telegramChat;
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
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 30px 0
}

.checkbox:not(:last-of-type) {
  border-bottom: 1px solid var(--light-grey-color);
}

.label {
  font-size: 14px;
  cursor: pointer;
  color: var(--grey-color);
}

.block-input {
  display: flex;
  gap: 5px;
}

.block-edit {
  display: flex;
  width: 65%;
  justify-content: flex-end;
}

h1 {
  font-size: 16px;
}

.block-edit p {
  width: 150px;
  font-size: 15px;
  color: var(--grey-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
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
  color: var(--main-green-color);
}

@media screen and (min-width: 767px) and (max-width: 990px) {
  .checkbox {
    height: 35px;
    padding: 20px 0
  }

  .label {
    font-size: 11px;
  }

  h1 {
    font-size: 12px;
  }

  .block-edit p {
    font-size: 12px;
  }

  .block-edit button img {
    width: 17px;
  }
}

@media screen and (max-width: 767px) {
  h1 {
    order: 1;
  }

  .title-block {
    order: 2;
  }

  .form-control {
    order: 3;
  }

  .checkbox:not(:last-of-type) {
    border-bottom: unset;
  }

  .checkbox {
    padding: 20px 0;
  }

  input[type='text'] {
    max-width: 200px;
  }
}
</style>
