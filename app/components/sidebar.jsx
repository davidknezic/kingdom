import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { FloatingActionButton, TextField, RaisedButton, DropDownMenu, AppBar, Styles } from 'material-ui'
import classNames from 'classnames'

const ThemeManager = Styles.ThemeManager

export default class NameChallenge extends Component {
  constructor(props) {
    super(props)
  }

  getValue() {
    return this.refs.name.getValue()
  }

  render() {
    var editSvg = '<path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zM25.6 73.7l7.6-16.4 8.8 8.8-16.4 7.6zM43 65.2l-8.8-8.8 23.2-23.2 8.8 8.8L43 65.2zM67.1 41l-8.8-8.8 9.4-9.4 8.8 8.8-9.4 9.4z"/>';
    var deleteSvg = '<path d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45 45-20.147 45-45S74.853 5 50 5zm27.463 63.31l-9.153 9.153L50 59.153l-18.31 18.31-9.154-9.153L40.846 50l-18.31-18.31 9.156-9.154L50 40.846l18.31-18.31 9.153 9.155L59.153 50l18.31 18.31z"/>';

    var menuItems = [
      { payload: '1', text: 'Never' },
      { payload: '2', text: 'Every Night' },
      { payload: '3', text: 'Weeknights' },
      { payload: '4', text: 'Weekends' },
      { payload: '5', text: 'Weekly' },
    ];

    return (
      <div>
        <AppBar
          title="Hello"
          showMenuIconButton={false} />

        <div className="sidebar__item" >
          <div className="sidebar__item__title" >
            <div className="sidebar__item__title__text" >Show meetups</div>
            <div className="sidebar__item__title__action" >
            </div>
          </div>
          <DropDownMenu menuItems={menuItems} />

        </div>

        {['Foo','Bar','baz'].map((title, index) => {
          var classes = classNames({ 'sidebar__item__content': true, 'sidebar__item__content--active': index == 0 });

          return (
            <div className="sidebar__item" >
              <div className="sidebar__item__title" >
                <div className="sidebar__item__title__text" >{title}</div>
                <svg className="sidebar__item__title__action" viewBox="0 0 100 100" dangerouslySetInnerHTML={{__html: editSvg }} />
                <svg className="sidebar__item__title__action" viewBox="0 0 100 100" dangerouslySetInnerHTML={{__html: deleteSvg }} />
              </div>
              <div className={classes} >..</div>
            </div>
          )
        })}

        <div className="sidebar__add-panel">
          <FloatingActionButton
            className="sidebar__add-button"
            styles={{ width: '100px' }}>
            <svg className="sidebar__add-icon" viewBox="-95 97 48 48">
              <circle fill="#263238" cx="-71" cy="121" r="24"/>
              <path fill="#FAFAFA" d="M-78.4 133.2c-.4.8-.8 1.5-1.2 2.3 0 .1-.1.2-.2.2-.6.3-1.1.5-1.7.8-.1.1-.3.1-.4.2.9-.3 1.7-.6 2.6-.9.4-1 .7-2 1.1-3-.1.2-.2.3-.2.4zm17.3-.5c.1.1.3.2.4.2.5.2.9.5 1.4.7.3 1 .7 2.1 1 3.1 0 0 0 .1.1.1l-.9-3.3c-.7-.2-1.4-.6-2-.8zm-12.8-.4c.1.2.3.3.4.4.8.7 1.6 1.5 2.3 2.2l.3.3c.3.7.5 1.4.8 2.1-.1-.9-.3-1.7-.5-2.6-1-.7-2-1.5-2.9-2.2-.1 0-.2-.1-.4-.2zm6.4-4.3l.1.1c1 .5 2.1 1.1 3.1 1.6.2.9.4 1.8.5 2.7 0 .1 0 .3.1.4l-.3-3.3c-.6-.2-1.1-.5-1.7-.7-.6-.3-1.2-.6-1.8-.8zm-5.5-.6c.5.8 1.1 1.7 1.7 2.5.1-.1.2-.2.2-.3-.5-.7-1.1-1.3-1.6-2-.1 0-.2-.1-.3-.2zm-3.9.3c-.1.1-.1.3-.2.3-1.2.7-2.4 1.4-3.5 2.1-.2.5-.4 1-.6 1.6.3-.4.5-.8.8-1.2.1-.1.2-.2.4-.3 1.2-.6 2.3-1.3 3.5-1.9.1-.6.2-1.1.3-1.7-.3.3-.5.7-.7 1.1zm6.7-18.5v15.7c.2 0 .5.1.7.1v-15.8h-.7zm-1.1 0v15.5c.2 0 .5.1.7.1v-15.6h-.7zm1.1-2.3h.4l.3-.3v-.4l-.7.7zm-.9 0c.2 0 .4.1.5-.1l1.1-1.1c.1-.1 0-.3 0-.5-.5.6-1.1 1.1-1.6 1.7zm-.1-.9c-.1.1-.1.4-.1.5l1.7-1.7c.2-.1.1-.3.1-.5l-1.7 1.7zm0-.9c-.1.1-.1.3-.1.5.6-.5 1.1-1.1 1.7-1.7.2-.1.1-.4.1-.5-.6.5-1.1 1.1-1.7 1.7zm0-1c-.2.1-.1.3-.1.5.6-.5 1.1-1.1 1.7-1.7.2-.1.1-.3.1-.5-.6.6-1.1 1.2-1.7 1.7zm0-.9c-.2.1-.1.3-.1.5.6-.5 1.1-1.1 1.7-1.7.2-.1.1-.3.1-.5-.6.5-1.1 1.1-1.7 1.7zm1.3-2.3l-1.3 1.3c-.2.1-.1.3-.1.5.1-.1.2-.2.3-.2l1.5-1.5c-.1-.1-.3-.1-.4-.1zm-.9 0c-.1.2-.3.3-.4.5v.4c.3-.3.6-.6.9-.8-.3-.1-.4-.1-.5-.1zm-.6-.9c.1-.4.4-.8.9-.9.5-.1 1 .4 1.1.9h1.5v.7h-1v6.5c.1 0 .1 0 .2.1v1.2h2.4c.3 0 .6.2.8.4.2.3.3.8.2 1.2-.1.4-.5.7-.9.7 0-.2-.1-.5 0-.7.3-.1.4-.6.1-.8-.1-.1-.2-.1-.3-.1h-2.4V125h.4c1.9-.3 3.7-.6 5.6-1l2.6 2.6c.5.6 1.1 1.1 1.7 1.7.3 1.2.6 2.4 1 3.7.6 2 1.2 4.1 1.8 6.1-3.3.6-6.5 1.3-9.8 1.9-.2.1-.5 0-.7 0-2.8-.3-5.6-.7-8.3-1-.6-.1-1.3-.1-2-.1-2.6-.1-5.3-.1-7.9-.2h-.1c.4-2.8.9-5.6 1.3-8.4 0-.1 0-.2.1-.2 1.8-1 3.6-1.9 5.4-2.9.5-1 .9-2.1 1.4-3.1l4.8.6v-.6-14.7-.2H-74c-.3.1-.4.5-.2.7 0 .1.2.2.3.3v.7c-.3 0-.6-.2-.8-.4-.4-.5-.3-1.3.1-1.7.2-.2.4-.3.7-.3h2.3v-1.3h.2v-.5-5.5-.5h-1v-.7h1z"/>
            </svg>
          </FloatingActionButton>
          <h1 className="sidebar__add-title">Add Rule to Kingdom</h1>
        </div>
      </div>
    )
  }
}
