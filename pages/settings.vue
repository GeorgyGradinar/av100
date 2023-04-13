<template>
  <div>
    <h1>Настройки</h1>

    <main class="wrapper-page">
      <notification :showPopup="isOpenNotification" @closePopup="closeNotification"></notification>

      <OtherSettings></OtherSettings>
      <GoToCard></GoToCard>
      <NewCollectionAlerts></NewCollectionAlerts>
      <Account></Account>
      <CallSip></CallSip>

      <button class="button-save" @click="saveData">Сохранить</button>
    </main>
  </div>
</template>

<script>

import OtherSettings from "~/components/OtherSettings";
import GoToCard from "~/components/GoToCard";
import NewCollectionAlerts from "~/components/NewCollectionAlerts";
import Account from "~/components/Account";
import CallSip from "~/components/CallSip";
import notification from "~/components/Notification";

export default {
  name: "settings",

  components: {
    OtherSettings,
    GoToCard,
    NewCollectionAlerts,
    Account,
    CallSip,
    notification
  },

  data() {
    return {
      isOpenNotification: false,
    }
  },

  mounted() {
    this.$store.dispatch('login');
  },

  methods: {
    saveData() {
      this.isOpenNotification = true;
      this.$store.dispatch('updateUserData', {token: this.$store.state.userToken, user: this.$store.state.user});
    },

    closeNotification(){
      this.isOpenNotification = false;
    }
  }
}
</script>

<style scoped>
.wrapper-page {
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

h1{
  display: flex;
  width: 100%;
  background-color: #f9f9fc;
  padding: 15px;
}

.button-save {
  position: relative;
  width: var(--control-width);
  padding: 13px 20px;
  background: var(--main-green-color);
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 0.3rem;
  margin-bottom: 20px;
  margin-left: 250px;
}

.button-save::after {
  content: '';
  position: absolute;
  top: -40px;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: var(--light-grey-color);
  margin-top: 20px;
}

@media screen and (min-width: 767px) and (max-width: 990px) {
  .button-save {
    margin-left: 200px;
    width: var(--control-width-md);
    font-size: 10px;
    padding: 10px 15px;
  }

  h1 {
    font-size: 24px;
  }
}

@media screen and (max-width: 767px) {
  .button-save {
    margin-left: 0;
  }

  h1 {
    font-size: 24px;
  }
}

@media screen and (max-width: 575px) {
  .button-save {
    width: 100%;
  }
}

</style>
