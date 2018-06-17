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
            <div className={css('image')}>
              <img src={require(`Images/${item.image}`)} alt='' />
            </div>
            <div className={css('logo')}>
              <img src={require(`Images/${item.logo}`)} alt='' />
            </div>
          </div>
          <div className={css('texts')}>
            <p className={css('genre')}>{item.genre}</p>
            <p className={css('description')}>{item.description}</p>
            <p className={css('format')}>{item.format}</p>
            <div className={css('network')}>{item.network}</div>
            <div>
              <a className={css('link')} href='{item.url}' target='_blank'>{item.url_label}</a>
            </div>
            { item.business_model && item.business_model.length &&
              item.business_model.map((businessModel, i) => {
                return (
                  <div key={i}>
                    { businessModel.url
                      ? <a href={businessModel.url}>
                        {businessModel.name}
                      </a>
                      : <span>{businessModel.name}</span>
                    }
                  </div>
                )
              })
            }
            {/* <a href='' className='twitter'>
              <Icon id='twitter-icon' width='30' />
            </a>
            <FormattedRelative
              value={new Date(1459832991883)}
            /> */}
          </div>
        </div>
      </div>
    )
  }
}
