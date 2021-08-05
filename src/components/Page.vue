<template>
  <div>
    <MyHeader :user="user" @onLogin="login" @onLOgout="logout" @onSignUp="signUp" />
    <main>
      <div class="content-wrapper">
        <div class="content" :key="i" v-for="i in 10">
          {{ 'コンテンツが表示される.repeat(20)' }}
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MyHeader from './Header.vue';

export default {
  components: {
    MyHeader
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    login() {
      this.user = { id: 1, name: 'Arnold' };
    },
    logOut() {
      this.user = {};
    },
    signUp() {
      window.open('https:///github.com/');
    }
  }
};
</script>

<style lang="scss">
main {
  .content-wrapper {
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 25px;
    row-gap: 1em;
  }

  @media screen and (max-width: 480px) {
    .content-wrapper {
      grid-template-columns: 1fr;
    }
  }
}
</style>
