<template>
  <SectionWrapper :title="'Учётная запись'">
    <form class="form-control">
      <section class="wrapper-input">
        <p class="title-input">Компания</p>
        <input type="text" :value="user.companyname" readonly>
      </section>

      <section class="wrapper-input">
        <p class="title-input">Логин</p>
        <input type="text" :value="user.login" readonly>
      </section>

      <section class="wrapper-input">
        <p class="title-input">Номер телефона</p>
        <input type="text" v-model="phoneNumber">
      </section>

      <section class="wrapper-input">
        <p class="title-input">Имя</p>
        <input type="text" v-model="name">
      </section>

      <section class="wrapper-input">
        <p class="title-input">Фамилия</p>
        <div class="wrapper-input-info">
          <input type="text" v-model="surname">
          <p class="text-info">* Не обязательно</p>
        </div>
      </section>
    </form>
  </SectionWrapper>
</template>

<script>
import SectionWrapper from "~/components/SectionWrapper";

export default {
  name: "Account",
  components: {SectionWrapper},

  data() {
    return {
      phoneNumber: '',
      name: '',
      surname: '',
    }
  },

  computed: {
    user() {
      const currentUser = this.$store.state.user;

      this.name = currentUser.fname;
      this.phoneNumber = currentUser.phone;
      this.surname = currentUser.lname;

      return currentUser;
    }
  }
}
</script>

<style scoped>

.form-control {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.wrapper-input {
  display: flex;
  justify-content: space-between;
}

input,
.wrapper-input-info {
  width: 65%;
}

.wrapper-input-info input {
  width: 100%;
}

.title-input {
  display: flex;
  align-items: center;
  width: 120px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}

.text-info {
  position: absolute;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-color);
  margin-top: 5px;
}

@media screen and (min-width: 767px) and (max-width: 990px) {
  .form-control {
    gap: 18px;
  }

  .title-input {
    width: 95px;
    font-size: 12px;
  }

  .text-info {
    font-size: 10px;
    margin-top: 3px;
  }
}

@media screen and (max-width: 767px) {
  .wrapper-input {
    flex-direction: column;
    gap: 5px;
  }

  .title-input {
    width: 100%;
    font-weight: 600;
  }

  input,
  .wrapper-input-info {
    width: 100%;
  }
}

</style>
