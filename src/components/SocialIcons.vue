<template>
  <div class="social-icons d-flex gap-2">
    <div class="icon-box">
      <Icon icon="prime:linkedin" width="40" />
    </div>

    <div class="icon-box">
      <Icon icon="prime:github" width="40" />
    </div>

    <div class="icon-box">
      <Icon icon="material-symbols-light:stacked-email-outline" width="40" />
    </div>
  </div>
</template>

<script script></script>

<style lang="scss" scoped>
.social-icons {
  margin-right: 6rem;
  .icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $terceira-color;
    padding: 4px;
    clip-path: polygon(
      30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%
    );
  }
}
</style>
