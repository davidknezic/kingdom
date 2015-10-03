import superagent from '../utils/superagent'

export default function(cat, cb) {
  console.log(cat);
  return superagent
    .get('https://api.meetup.com/find/groups')
    .set('accept', 'application/json')
    .query({'format': 'json'})
    .query({'country': 'CH'})
    .query({'category': cat})
    .query({'order': 'members'})
    .query({'page': '50'})
    .query({'key': '567c48354d57302d5236484f41387859'})
    .end(cb);
}
