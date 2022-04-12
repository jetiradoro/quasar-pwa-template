<template>
	<div class="">
		<q-dialog
			v-model="error.show"
			@show="autoClose"
			no-esc-dismiss
			seamless
			position="bottom">
			<q-card class="bg-red">
				<q-card-section class="row items-center no-wrap">
					<div class="text-white">
						{{
							error.message !== '' &&
							error.message !== undefined
								? error.message
								: $t('messages.error_server')
						}}
					</div>
				</q-card-section>
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

		return {
			error: computed(() => store.getters['global/getError']),
			locale: I18n,
			autoClose() {
				store.dispatch('global/hideErrorToast')
			},
		}
	},
}
</script>
