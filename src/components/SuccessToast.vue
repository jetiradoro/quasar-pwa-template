<template>
	<div class="">
		<q-dialog
			v-model="success.show"
			@show="autoClose"
			no-esc-dismiss
			seamless
			position="bottom">
			<q-card class="bg-teal">
				<q-card-section class="row items-center no-wrap">
					<div class="text-white">
						{{
							success.message !== '' &&
							success.message !== undefined
								? success.message
								: $t('messages.success_saved')
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
			success: computed(() => store.getters['global/getSuccess']),
			locale: I18n,
			autoClose() {
				store.dispatch('global/hideSuccessToast')
			},
		}
	},
}
</script>
