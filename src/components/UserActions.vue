<template>
  <div v-if="getUserData">
    <q-btn-dropdown
      class=""
      flat
      color=""
      :label="getUserData.name"
      dropdown-icon="none"
    >

      <!--        <q-separator vertical inset class="q-mx-lg"/>-->

      <div class="column items-center">
        <q-list separator>
          <q-item clickable v-ripple>
            <q-item-section @click="logout">{{ this.$t('logout') }}</q-item-section>
          </q-item>
        </q-list>

      </div>

    </q-btn-dropdown>
  </div>

</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'UserActions',
  data() {
    return {
      fab1: null,
      fab2: null
    }
  },
  created(){

  },
  computed: {
    ...mapGetters('user', ['getUserData','getToken']),
  },
  watch:{
    getUserData: function(value){
      if(!value && !this.getToken){
        this.toLoginPage()
      }
    }
  },
  methods: {
    logout() {
      this.$store.commit('user/destroySession')
    },
    toLoginPage(){
      console.log('redirect')
      this.$router.push('login')
    }
  }
}
</script>
