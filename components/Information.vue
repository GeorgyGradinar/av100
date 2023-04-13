<template>
  <section class="wrapper-block">
    <img src="../static/info.svg" alt="info">
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
  background-color: var(--main-green-color);
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
  background-color: var(--main-green-color);
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  left: calc(50% - 7px);
  border-radius: 3px;
  transform: rotate(45deg);
}

@media screen and (min-width: 767px) and (max-width: 990px) {
  .wrapper-block img {
    width: 19px;
    height: 19px;
  }

  .info-tooltip {
    width: 230px;
    top: 20px;
    font-size: 9px;
    padding: 7px;
  }

  .info-tooltip:before {
    content: "";
    width: 13px;
    height: 13px;
  }

  .wrapper-block img:hover + .info-tooltip,
  .info-tooltip:hover {
    visibility: visible;
    opacity: 1;
    top: 25px;
  }
}

@media screen and (max-width: 767px) {
  .info-tooltip {
    font-size: 11px;
    font-weight: 600;
    padding: 10px;
  }
}

@media screen and (max-width: 575px) {
  .info-tooltip {
    right: 0;
  }

  .info-tooltip:before {
    left: unset;
    right: 5px;
  }
}

</style>
