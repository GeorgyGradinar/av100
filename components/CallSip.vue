<template>
  <div class="wrapper-block">

    <div class="title">
      Звонок через SIP
      <div class="container">
        <input type="checkbox" class="checkbox" id="checkbox">
        <label class="switch" for="checkbox">
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <article>
      <span class="title-block">Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так, будто звонки совершаются с разных номеров.</span>
    </article>
  </div>
</template>

<script>
export default {
  name: "CallSip"
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
  font-size: 15px;
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
  border: 2px solid #2dc574;
}

.checkbox:checked + .switch .slider {
  background-color: #2dc574;
  left: 15px;
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

.wrapper-block {
  display: flex;
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

</style>
