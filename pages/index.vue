<template>
  <Settings></Settings>
</template>

<script>

import settings from "~/pages/settings";

export default {
  name: 'IndexPage',

  components: {
    Settings: settings
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s;
}

</style>

