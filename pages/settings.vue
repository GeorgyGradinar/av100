<template>
  <div class="wrapper-page">
    <button class="button-save">Сохранить</button>
    <OtherSettings></OtherSettings>
    <GoToCard></GoToCard>
    <NewCollectionAlerts></NewCollectionAlerts>
    <Account></Account>
    <CallSip></CallSip>
  </div>
</template>

<script>

import OtherSettings from "~/components/OtherSettings";
import GoToCard from "~/components/GoToCard";
import NewCollectionAlerts from "~/components/NewCollectionAlerts";
import Account from "~/components/Account";
import CallSip from "~/components/CallSip";

export default {
  name: "settings",

  components: {
    OtherSettings,
    GoToCard,
    NewCollectionAlerts,
    Account,
    CallSip
  },

  data() {
    return {}
  },



}
</script>

<style scoped>

.wrapper-page {
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.button-save {
  position: relative;
  width: 490px;
  padding: 13px 20px;
  background: #2dc574;
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
  top: 60px;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: #e1e1e3;
}

</style>
