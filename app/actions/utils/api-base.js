import config from '../../config'

let apiBase = process.env.API_BASE || config.api.endpoint;

export default apiBase;
