<template>
  <section class="wrapper-block">

    <div class="title">
      Звонок через SIP
      <div class="container">
        <input type="checkbox" class="checkbox" id="checkbox" :checked="user.calltype === '1'">
        <label class="switch" for="checkbox">
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <span class="title-block">Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так, будто звонки совершаются с разных номеров.</span>
  </section>
</template>

<script>
export default {
  name: "CallSip",

  computed: {
    user() {
      return this.$store.state.user;
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
  display: flex;
  gap: 10px;
  font-weight: 600;
  font-size: 17px;
}

.container {
  width: 35px;
  height: 20px;
  position: relative;
  transition: all 0.2s ease-out;
}

.checkbox {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.switch {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid #bababa;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.slider {
  width: 18px;
  height: 18px;
  position: absolute;
  border-radius: 50%;
  background: #bababa;
  cursor: pointer;
  transition: all 0.2s ease-out;
  left: 0;
}

.checkbox:checked + .switch {
  border: 2px solid var(--main-green-color);
}

.checkbox:checked + .switch .slider {
  background-color: var(--main-green-color);
  left: 15px;
}

.wrapper-block {
  display: flex;
}

.title-block {
  max-width: var(--control-width);
}


@media screen and (min-width: 767px) and (max-width: 990px) {
  .title {
    width: 200px;
    font-size: 14px;
  }

  .container {
    width: 28px;
    height: 16px;
  }

  .switch {
    border: 1px solid #bababa;
  }

  .slider {
    width: 15px;
    height: 15px;
  }

  .checkbox:checked + .switch {
    border: 1px solid var(--main-green-color);
  }

  .checkbox:checked + .switch .slider {
    left: 12px;
  }

  .title-block {
    max-width: var(--control-width-md);
  }
}

@media screen and (max-width: 767px) {
  .wrapper-block {
    flex-direction: column;
    gap: 20px;
  }
}

</style>
