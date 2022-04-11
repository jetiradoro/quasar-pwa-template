<template>
	<div class="q-pa-md q-gutter-sm">
		<q-dialog
			v-model="error.show"
			persistent
			transition-show="scale"
			transition-hide="scale">
			<q-card class="bg-red text-white" style="width: 500px">
				<q-card-section>
					<div class="text-h6">
						<i
							style="font-size: 32px"
							class="las la-exclamation-circle"></i>
						{{ locale.t('buttons.error') + ': ' + error.title }}
					</div>
				</q-card-section>

				<q-card-section class="q-pt-none">
					{{ error.message }}
					<q-list class="q-mt-md" dense>
						<q-item
							v-for="(err, index) in error.errors"
							:key="index"
							v-ripple>
							<q-item-section avatar>
								<q-icon name="las la-caret-right"></q-icon>
							</q-item-section>
							<q-item-section>
								{{ err }}
							</q-item-section>
						</q-item>
					</q-list>
				</q-card-section>

				<q-card-actions align="right" class="bg-white text-white">
					<q-btn
						flat
						:label="locale.t('buttons.accept')"
						color="primary"
						@click="resetError"
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

		return {
			error: computed(() => store.getters['global/getError']),
			locale: I18n,
			resetError: () => store.commit('global/removeError'),
		}
	},
}
</script>
