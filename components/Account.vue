<template>
  <div class="wrapper-block">
    <div class="title">Учётная запись</div>

    <form class="form-control">
      <section>
        <p>Компания</p>
        <input type="text">
      </section>

      <section>
        <p>Логин</p>
        <input type="text">
      </section>

      <section>
        <p>Номер телефона</p>
        <input type="text">
      </section>

      <section>
        <p>Имя</p>
        <input type="text">
      </section>

      <section>
        <p>Фамилия</p>
        <div>
          <input type="text">
          <p>* Не обязательно</p>
        </div>

      </section>
    </form>

  </div>
</template>

<script>
export default {
  name: "Account"
}
</script>

<style scoped>

.wrapper-block {
  display: flex;
  margin-bottom: 25px;
}

.title {
  width: 250px;
  font-weight: 600;
  font-size: 15px;
}

.form-control {
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

section {
  display: flex;
  justify-content: space-between;
}

section p {
  display: flex;
  align-items: center;
  width: 120px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}

section input {
  width: 240px;
  border: 1px solid #e1e1e3;
  padding: 6px 10px;
  font-size: 15px;
  font-weight: 400;
  color: #686869;
  border-radius: 3px;
  transition: 0.2s;
}

section input:focus {
  outline: 0;
  outline-offset: 0;
  border: 1px solid #2dc574;
}

input + p {
  position: absolute;
  padding-top: 5px;
  width: 130px;
  color: #a3a3a3;
  font-size: 12px;
}

</style>
