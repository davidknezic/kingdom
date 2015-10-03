import superagent from 'superagent'

import superagentCache from 'superagent-cache'

superagentCache(superagent)

export default superagent
