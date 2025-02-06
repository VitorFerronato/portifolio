<template>
  <div>
    <button class="custom-button">{{ title }}</button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
.custom-button {
  background-color: $primary-color;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 10px rgba(23, 198, 148, 0.8);
}

.custom-button:hover {
  background-color: $primary-color;
  box-shadow: 0 0 15px rgba(23, 198, 148, 1);
}
</style>
