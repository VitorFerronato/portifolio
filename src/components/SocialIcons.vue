<template>
  <div class="social-icons d-flex gap-2">
    <a
      href="https://www.linkedin.com/in/vitor-ferronato/"
      target="_blank"
      class="icon-box"
    >
      <Icon icon="prime:linkedin" width="40" color="#f2f2f2" />
    </a>

    <a
      href="https://github.com/VitorFerronato/"
      target="_blank"
      class="icon-box"
    >
      <Icon icon="prime:github" color="#f2f2f2" width="40" />
    </a>

    <a href="mailto:vitorferronato@gmail.com" class="icon-box">
      <Icon
        icon="material-symbols-light:stacked-email-outline"
        width="40"
        color="#f2f2f2"
      />
    </a>
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
