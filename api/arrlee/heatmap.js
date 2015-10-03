import superagent from '../utils/superagent'

export default function(station, country, d, maxTime, cb) {
  return superagent
    .get('http://arrlee.ch/ajax/heatmap')
    .query({ 'start_station_uic': station })
    .query({ 'start_country': country })
    .query({ 'year': '0' })
    .query({ 'month': d.getMonth() })
    .query({ 'day': d.getDate() })
    .query({ 'start-time': '8' })
    .query({ 'max_travel_time': maxTime })
    .query({ 'edgeLength': '0.75' })
    .query({ 'max-changes': '10' })
    .query({ 'id': '2123762497' })
    .end(cb);
}
