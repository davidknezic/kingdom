import superagent from '../utils/superagent'

export default function(lat, lng, cb) {
  return superagent
    .get('https://api.instagram.com/v1/media/search')
    .query({ lat: lat })
    .query({ lng: lng })
    .query({ distance: 5000 })
    .query({ 'client_id': 'f5a0704d977044308d865ba9c6822781'})
    .query({ 'client_secret': '44261373692348649c67aa47ac63f9a6'})
    .end(cb);
}
