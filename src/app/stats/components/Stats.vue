<template>
  <div class="container container--centered">
    <div class="stats">
      <h1 class="stats__header">
        Stats for
      </h1>

      <dl class="dlist">
         <dt class="dlist__title">Origin URL</dt>
         <dd class="dlist__body"></dd>
      </dl>
     <dl class="dlist">
        <dt class="dlist__title">Shortening requested</dt>
        <dd class="dlist__body"></dd>
     </dl>
     <dl class="dlist">
        <dt class="dlist__title">Used</dt>
        <dd class="dlist__body"></dd>
     </dl>
     <dl class="dlist">
        <dt class="dlist__title">Last requested</dt>
        <dd class="dlist__body"></dd>
     </dl>
     <dl class="dlist">
        <dt class="dlist__title">Last used</dt>
        <dd class="dlist__body"></dd>
     </dl>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .stats {
    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
    width: 100%;

    &__header {
      font-size: 1.4em;
      margin: 0;
      margin-bottom: 40px;
      overflow-wrap: break-word;
    }

    &__loading {
      color: #fff;
      font-size: 1.2em;
      font-weight: 500;
    }
  }
</style>
