<template>
  <div class="px-10 pt-10 pb-4">
    <h1 class="label-title">{{title}}</h1>
    <span class="label">{{subtitle}}</span>
  </div>
</template>

<style scoped>
div {
  color: #fff;
}

.label-title {
  font-size: 27.3001px;
  line-height: 32px;
}

.label {
  font-size: 13.8301px;
  line-height: 14px;

  color: #5B5A99;
}
</style>

<script>
export default {
  name: 'Header',

  props: {
    title: String,
    subtitle: String,
  },
};
</script>
