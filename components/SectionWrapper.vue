<template>
  <section class="wrapper-block">
    <h1 class="title">{{ title }}</h1>
    <div class="content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionWrapper",
  props:['title']
}
</script>

<style scoped>
.wrapper-block {
  display: flex;
}

.title {
  width: 250px;
  min-width: 250px;
  font-weight: 600;
  font-size: 17px;
}

.content {
  width: 100%;
  max-width: var(--control-width);
}

.form-control {
  width: 100%;
  max-width: 370px;
}

@media screen and (min-width: 767px) and (max-width: 990px) {
  .title {
    width: 200px;
    min-width: 200px;
    font-size: 14px;
  }

  .content {
    max-width: var(--control-width-md);
  }

  .form-control {
    max-width: 295px;
  }
}

@media screen and (max-width: 767px) {
  .title {
    display: none;
  }

  .form-control {
    max-width: 370px;
  }
}

@media screen and (max-width: 575px) {
  .content {
    max-width: 100%;
  }

  .form-control {
    max-width: 100%;
  }
}
</style>
