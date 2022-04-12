<template>
  <q-layout view="lHh Lpr lFf">
    <q-page style="margin-top: 10%" class="flex  q-pa-lg">
      <transition
        appear
        enter-active-class="animated slower zoomIn"
        class="animated">

        <div class="col">
          <div class="row">
            <div class="col-xs-6 offset-xs-3 col-sm-2 offset-sm-5 q-mb-md">
              <q-img src="logo.png" alt=""/>
            </div>

            <q-card square bordered class="q-pa-lg shadow-1 col-xs-12 col-sm-4 offset-sm-4">
              <div v-if="error" class=""></div>
              <q-form @submit="authenticate" class="q-gutter-md">
                <q-card-section>
                  <q-input square filled v-model="email" type="email" label="email"/>

                </q-card-section>
                <q-card-section>
                  <q-input square filled v-model="password" type="password" label="password"/>
                </q-card-section>
                <q-card-actions class="q-px-md">
                  <q-btn type="submit" color="primary" class="full-width" label="Login"/>
                </q-card-actions>
              </q-form>
            </q-card>
          </div>
        </div>
      </transition>
      <ErrorToast />
      <Loading :show="showLoading" />
    </q-page>
  </q-layout>
</template>

<script>
import ErrorToast from 'src/components/ErrorToast.vue'
import {computed} from 'vue'
import {useStore, mapGetters} from 'vuex'
import Loading from 'src/components/Loading'
export default {
  name: 'LoginPage',
  created() {

  },
  computed: {
    ...mapGetters('user', ['getToken','getUserData']),
    ...mapGetters('global',['showLoading']),
  },
  watch:{
    getUserData: function(value){
      if(value){
        this.$router.push('/')
      }
    }
  },
  components:{
    Loading,
    ErrorToast
  },
  data() {
    return {
      email: null,
      password: null,
      error : null
    }
  },
  methods: {
    authenticate() {
      const payload = {username: this.email, password: this.password}
      this.$store.dispatch('user/authUser', payload)
    }
  }
}
</script>
<style scoped lang="scss">
img {
  --animate-duration: 2s;
  --animate-repeat: 2;

  &.size-mobile {
    width: 80%;
    height: 80%;
  }

  &.size-desktop {
    width: 30%;
    height: 30%;
  }
}
</style>
