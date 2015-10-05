import Alt from 'alt';
import flux from 'flux'

class AnalyticsDispatcher extends flux.Dispatcher {
  dispatch(payload) {
    ga('send', 'event', 'foo', payload.action, JSON.stringify(payload.data))
    super.dispatch(payload)
  }
}

export default new Alt({
  dispatcher: new AnalyticsDispatcher()
});
