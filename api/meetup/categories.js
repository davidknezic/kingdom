import superagent from '../utils/superagent'

export default function(query, cb) {
  return superagent
    .get('https://api.meetup.com/2/categories')
    .query({'format': 'json'})
    .query({'page': '100'})
    .query({'key': '567c48354d57302d5236484f41387859'})
    .end(cb);
}
