<template>
  <section class="wrapper-block">
    <img src="../static/info.svg" alt="">
    <section class="info-tooltip">
      <p>{{ text }}</p>
    </section>
  </section>
</template>

<script>
export default {
  name: "information",

  props:['text'],
}
</script>

<style scoped>

.wrapper-block {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wrapper-block img {
  width: 25px;
  height: 25px;
  cursor: help;
}

.info-tooltip {
  visibility: hidden;
  width: 300px;
  position: absolute;
  top: 25px;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  background-color: #2dc574;
  padding: 5px;
  border-radius: 3px;
  transition: all 0.2s;
  opacity: 0;
  z-index: 1;
}

.info-tooltip p {
  text-align: center;
}

.wrapper-block img:hover + .info-tooltip,
.info-tooltip:hover {
  visibility: visible;
  opacity: 1;
  top: 30px;
}

.info-tooltip:before {
  content: "";
  background-color: #2dc574;
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  left: 142px;
  border-radius: 3px;
  transform: rotate(45deg);
}

</style>
