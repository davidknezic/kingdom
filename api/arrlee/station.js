import superagent from '../utils/superagent'

export default function(query, cb) {
  return superagent
    .get('http://arrlee.ch/ajax/station')
    .query({ lvdist: '0' })
    .query({ max_num: '15' })
    .query({ countries: 'DE,CH,AT,LI' })
    .query({ term: query })
    .end(cb);
}
