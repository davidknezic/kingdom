import { default as React, addons, Component } from 'react/addons'

export default class ArrowRight extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var useTag = '<path d="M0 50.205c0 2.41 1.723 4.366 3.846 4.366H86.69L53.23 92.55c-1.5 1.705-1.5 4.468 0 6.173.75.854 1.736 1.28 2.72 1.28.985 0 1.97-.426 2.72-1.28l40.204-45.634c1.5-1.705 1.5-4.468 0-6.173L58.67 1.28c-1.5-1.706-3.94-1.706-5.44 0-1.5 1.703-1.5 4.467 0 6.172L87.05 45.84H3.846C1.723 45.84 0 47.794 0 50.204z"/>';
    //var classes = React.addons.classSet({
    //  'welcome__logo': true,
    //  'welcome__logo--large': this.props.large,
    //});

      //<button className={classes}>
    return (
        <svg className="svg-icon" viewBox="0 0 100 100" dangerouslySetInnerHTML={{__html: useTag }} />
    )
      //</button>
  }
}
