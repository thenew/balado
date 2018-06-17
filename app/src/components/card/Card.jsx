import React from 'react'
import { FormattedRelative } from 'react-intl'
import Icon from 'Components/Icon'
import styles from './card.styl'
import classnames from 'classnames/bind'
const css = classnames.bind(styles)

export default class Card extends React.Component {

  render() {
    const item = this.props

    return (
      <div className={css('card')}>
        <div className={css('cardInner')}>
          <div className={css('header')}>
            <h2 className={css('title')}>{item.title}</h2>
            <div className={css('theme')}>{item.theme}</div>
          </div>
          <div className={css('picture')}>
            <div className={css('image')} />
            <div className={css('logo')}><img src={item.logo} /></div>
          </div>
          <div className={css('texts')}>
            <p className={css('category')}>{item.category}</p>
            <p className={css('description')}>{item.description}</p>
            <p className={css('description')}>{item.format}</p>
            <a className={css('link')} href='{item.url}' target='_blank'>{item.url_label}</a>
            <FormattedRelative
              value={new Date(1459832991883)}
            />
            <a href='' className='twitter'>
              <Icon id='twitter-icon' width='30' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
