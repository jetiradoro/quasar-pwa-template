<template>
	<div class="q-pa-md">
		{{ showLoading() }}
	</div>
</template>

<script>
import {useQuasar} from 'quasar'
import {useI18n} from 'vue-i18n'
export default {
	props: {
		show: {required: true},
	},
	setup(props) {
		const $q = useQuasar()
		const I18n = useI18n()
		return {
			showLoading() {
				if (props.show) {
					$q.loading.show({
						message: I18n.t('messages.loading'),
					})
				} else {
					$q.loading.hide()
				}
			},
		}
	},
}
</script>
