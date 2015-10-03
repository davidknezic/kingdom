import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt';

class ProcessStore {
  constructor() {
    this.bindActions(actions.process);

    this.state = {
      processState: 'getName'
    };
  }

  onUpdateProcessState(processState) {
    console.log(processState)
    this.setState({
      processState: processState
    })
  }

  //output(state) {
  //  return Immutable.fromJS(state);
  //}
}

export default alt.createStore(ProcessStore);
