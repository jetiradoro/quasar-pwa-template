<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="flex flex-center q-pa-lg">
      <transition
        appear
        enter-active-class="animated flip"
        class="animated"
        @after-appear="endAnimation">
        <img
          :class="$q.screen.lt.sm ? 'size-mobile' : 'size-desktop'"
          src="logo.png" />
      </transition>
    </q-page>
  </q-layout>
</template>

<script>
import {defineComponent} from 'vue'
import {useRouter} from 'vue-router'
export default defineComponent({
  name: 'Entry',
  setup() {
    const router = useRouter()
    return {
      endAnimation: function () {
        setTimeout(() => {
          router.push('/app')
        }, 1000)
      },
    }
  },
})
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
