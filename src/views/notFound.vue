<template>
  <section class="not-found">
    <h1>404</h1>
    <p>{{ $t("app.notFound") }}</p>
    <router-link to="/home">{{ $t("app.backHome") }}</router-link>
  </section>
</template>

<style scoped>
.not-found {
  padding: 48px 24px;
  text-align: center;
}
h1 {
  font-size: 48px;
}
p {
  margin: 12px 0;
}
</style>
