import { boot } from 'quasar/wrappers'
import config from '../config'

export default boot(({ app }) => {
	app.use(config)
})
