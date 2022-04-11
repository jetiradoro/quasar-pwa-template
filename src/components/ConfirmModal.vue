<template>
	<div class="q-pa-md q-gutter-sm">
		<q-dialog
			v-model="confirm.show"
			persistent
			transition-show="scale"
			transition-hide="scale">
			<q-card class="bg-warning text-white" style="width: 500px">
				<q-card-section>
					<div class="text-h6">
						<i
							style="font-size: 32px"
							class="las la-question-circle"></i>
						{{
							locale.t('buttons.warning') +
							': ' +
							locale.t('messages.warn_action')
						}}
					</div>
				</q-card-section>

				<q-card-section class="bg-white text-dark">
					{{ confirm.message }}

					<q-separator class="q-mt-lg" />
				</q-card-section>

				<q-card-actions align="right" class="bg-white text-white">
					<q-btn
						flat
						:label="locale.t('buttons.confirm')"
						color="primary"
						@click="execCallback"
						v-close-popup />
					<q-btn
						flat
						:label="locale.t('buttons.cancel')"
						color="dark"
						@click="resetConfirm"
						v-close-popup />
				</q-card-actions>
			</q-card>
		</q-dialog>
	</div>
</template>

<script>
// import {useQuasar} from 'quasar'

import {useI18n} from 'vue-i18n'
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
	setup() {
		const I18n = useI18n()
		const store = useStore()
		const getConfirm = computed(() => store.getters['global/getConfirm'])

		return {
			confirm: getConfirm,
			locale: I18n,
			resetConfirm: () => store.commit('global/removeConfirm'),
			execCallback: () => {
				const callback = store.state.global.confirm.callback
				if (callback.commit)
					store.commit(callback.commit, callback.payload)

				if (callback.dispatch)
					store.dispatch(callback.dispatch, callback.payload)

				store.commit('global/removeConfirm')
			},
		}
	},
}
</script>
