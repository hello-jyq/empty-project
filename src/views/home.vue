<template>
  <section class="welcome">
    <h1>{{ $t("app.welcome") }}</h1>
    <p>{{ $t("app.welcomeHint") }}</p>
  </section>
</template>

<style scoped>
.welcome {
  padding: 32px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-header-background);
}
h1 {
  margin-bottom: 8px;
  font-size: 24px;
}
p {
  color: var(--color-muted);
}
</style>
