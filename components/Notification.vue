<template>
  <div class="popup-menu" :class="{'close-block': !isOpen}">
    <p>Сохранено.</p>
  </div>
</template>

<script>
export default {
  name: "notification",

  props: ['showPopup'],

  data() {
    return {
      isOpen: false,
      timeoutId: null,
      delayTime: 3000,
    }
  },

  computed: {
    show() {
      return this.showPopup;
    }
  },

  watch: {
    show() {
      this.isOpen = this.show;
      this.openMenu();
    }
  },

  methods: {
    openMenu() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.timeoutId = setTimeout(() => {
        this.isOpen = false;
        this.$emit('closePopup');
      }, this.delayTime);
    }
  },
}
</script>

<style scoped>
.popup-menu {
  display: block;
  position: fixed;
  z-index: 5000;
  width: 300px;
  top: 0;
  left: calc(50% - 150px);
  font-size: 12px;
  padding: 10px;
  margin: 0 5px 5px;
  color: #fff;
  background-color: var(--light-green-color);
  border-left: 5px solid #42a85f;
  transition: all 0.5s;
}

.close-block {
  opacity: 0;
  z-index: 0;
}
</style>
