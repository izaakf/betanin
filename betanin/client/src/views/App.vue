<template lang="pug">
  #app
    #content
      .section
        .container
          nav-bar
      .section
        .container
          router-view
    #footer
      connection-banner
</template>

<script>
import ConnectionBanner from '@/components/ConnectionBanner.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'activity',
  components: {
    NavBar,
    ConnectionBanner
  }
}
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";
  $primary:           #d1536a;
  $primary-invert:    findColorInvert($primary);
  $green:             #23d160;
  $green-invert:      findColorInvert($green);
  $link-focus-border: $primary;
  $link-invert:       $primary-invert;
  $link:              $primary;
  $colors: (
    "primary": ($primary, $primary-invert),
    "green": ($green, $green-invert),
  );
  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  #content {
    flex: 1;
  }
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>
