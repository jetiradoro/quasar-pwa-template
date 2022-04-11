<template>
  <q-page class="flex flex-center">
    cosillas
  </q-page>
</template>

<script>
export default {
  name: "Login",
  created(){
    this.setTitle()
  },
  methods:{
    setTitle(){
      this.$store.commit('global/setTitle',this.$t('menu.login'));
      this.getUser()
    },
    getUser(){
      this.$store.dispatch('user/authUser')
      this.$store.dispatch('user/')
    }
  }
}
</script>
