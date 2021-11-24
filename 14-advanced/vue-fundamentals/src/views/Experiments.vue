<template>
  <div>
    <h1>Experiments</h1>

    <Clickr />
    <button>Please don't click this</button>

    <hr />

    <Profile name="Groucho" bio="no goats no masters" pic="http://www.fillmurray.com/400/600" />
    <Profile name="Harpo" bio="no goats no masters" pic="http://www.fillmurray.com/401/600" />
    <Profile name="Chico" bio="no goats no masters" pic="http://www.fillmurray.com/400/601" />
  </div>
</template>

<style>
h1 {
  color: blue;
}
</style>

<script>
// @ is a shortcut for `src`
import Clickr from '@/components/Clickr.vue';
import Profile from '@/components/Profile.vue';

export default {
  name: 'Experiments',
  components: {
    Clickr: Clickr,
    Profile: Profile
  }
}
</script>
