<template>
	<q-layout view="hHh lpR fFf">
		<q-header reveal class="bg-primary text-white" height-hint="98">
			<q-toolbar>
				<q-btn
					flat
					dense
					round
					icon="las la-bars"
					aria-label="Menu"
					@click="toggleLeftDrawer" />
				<q-avatar
					style="width: 90px"
					@click="goToHome"
					class="cursor-pointer no-border-radius">
					<img src="logo_w.png" alt="" />
				</q-avatar>

				<q-toolbar-title>
					<span>
						MCL App
						<q-badge color="secondary">{{
							config.version
						}}</q-badge>
					</span>
					<!--          <q-badge-->
					<!--            class="text-uppercase q-ml-sm text-blue-10"-->
					<!--            v-if="isSetProvider"-->
					<!--            color="warning"-->
					<!--          >{{ provider }}</q-badge> -->
				</q-toolbar-title>
				<!--        <q-btn-->
				<!--          flat-->
				<!--          round-->
				<!--          dense-->
				<!--          icon="las la-cloud-upload-alt"-->
				<!--          @click="publishConfig">-->
				<!--          <q-tooltip class="bg-dark">-->
				<!--            {{ $t('messages.publish_settings') }}-->
				<!--          </q-tooltip>-->
				<!--        </q-btn>-->
				<user-actions />
			</q-toolbar>

			<!--      <q-tabs align="left">-->
			<!--        <q-route-tab exact to="/app" :label="$t('menu.provider')" />-->
			<!--        &lt;!&ndash;        SIEMENS ROUTES &ndash;&gt;-->
			<!--        <q-route-tab-->
			<!--          v-show="provider === config.providers.siemens"-->
			<!--          exact-->
			<!--          to="/siemens/conn"-->
			<!--          :label="$t('menu.conn')" />-->
			<!--        <q-route-tab-->
			<!--          v-show="provider === config.providers.siemens"-->
			<!--          :to="`/${config.providers.siemens}/variables`"-->
			<!--          :label="$t('menu.variables')" />-->

			<!--        &lt;!&ndash;        MQTT ROUTES &ndash;&gt;-->
			<!--        <q-route-tab-->
			<!--          v-show="provider === config.providers.mqtt"-->
			<!--          exact-->
			<!--          :to="`/${config.providers.mqtt}/input-conn`"-->
			<!--          :label="$t('menu.input_settings')" />-->

			<!--        <q-route-tab-->
			<!--          v-show="provider === config.providers.mqtt"-->
			<!--          exact-->
			<!--          :to="`/${config.providers.mqtt}/output-conn`"-->
			<!--          :label="$t('menu.output_settings')" />-->

			<!--        &lt;!&ndash;        ROCKWELL ROUTES &ndash;&gt;-->
			<!--        <q-route-tab-->
			<!--          v-show="provider === config.providers.rockwell"-->
			<!--          exact-->
			<!--          :to="`/${config.providers.rockwell}/plc/conn`"-->
			<!--          :label="$t('menu.conn')" />-->

			<!--        <q-route-tab-->
			<!--          v-show="provider === config.providers.rockwell"-->
			<!--          exact-->
			<!--          :to="`/${config.providers.rockwell}/plc/variables`"-->
			<!--          :label="$t('menu.variables')" />-->

			<!--        &lt;!&ndash;        MYSQL ROUTES &ndash;&gt;-->
			<!--        <q-route-tab-->
			<!--          v-show="provider === config.providers.mysql"-->
			<!--          exact-->
			<!--          :to="`/${config.providers.mysql}/conn`"-->
			<!--          :label="$t('menu.conn')" />-->

			<!--        <q-route-tab to="/logo" :label="$t('menu.logo')" />-->
			<!--        &lt;!&ndash;				<q-route-tab to="/dashboard" :label="$t('menu.dashboard')" />&ndash;&gt;-->
			<!--      </q-tabs>-->
			<div class="text-h6 q-pa-sm q-pl-md bg-blue-6 text-white">
				{{ title }}
			</div>
		</q-header>

		<q-drawer
			v-model="leftDrawerOpen"
			side="left"
			behavior="desktop"
			elevated>
			<q-list>
				<q-item-label header> Main menú </q-item-label>

				<EssentialLink
					v-for="link in essentialLinks"
					:key="link.title"
					v-bind="link" />
			</q-list>
		</q-drawer>

		<q-page-container>
			<!-- <transition appear enter-active-class="animated slideInRight"> -->
			<router-view />
			<!-- </transition> -->
			<Loading :show="showLoading" />
			<ErrorModal />
			<ConfirmModal />
			<SuccessToast />
		</q-page-container>
	</q-layout>
</template>

<script>
import {useQuasar} from 'quasar'
import {useRouter} from 'vue-router'
import EssentialLink from 'components/EssentialLink.vue'
import {defineComponent, ref, computed} from 'vue'
import linksComponent from '../router/menu.js'
import {useI18n} from 'vue-i18n'
import {useStore} from 'vuex'
import Loading from '../components/Loading.vue'
import ErrorModal from '../components/ErrorModal.vue'
import ConfirmModal from '../components/ConfirmModal.vue'
import SuccessToast from '../components/SuccessToast'
import config from '../config'
import UserActions from 'src/modules/user/components/UserActions.vue'
export default defineComponent({
	name: 'AppLayout',
	components: {
		Loading,
		ErrorModal,
		SuccessToast,
		ConfirmModal,
		EssentialLink,
		UserActions,
	},

	setup() {
		const leftDrawerOpen = ref(false)
		const links = linksComponent(useI18n())
		const store = useStore()
		const quasar = useQuasar()
		const router = useRouter()
		return {
			essentialLinks: links,
			leftDrawerOpen,
			quasar,
			showLoading: computed(() => store.getters['global/showLoading']),
			title: computed(() => store.getters['global/getTitle']),
			user: computed(() => store.getters['user/getUserData']),
			config: computed(() => config),
			options: ['Logout'],

			goToHome() {
				router.push({path: '/'})
			},
			toggleLeftDrawer() {
				leftDrawerOpen.value = !leftDrawerOpen.value
			},

			// publishConfig() {
			//   store.dispatch('global/publishConfig')
			// },
		}
	},
})
</script>
