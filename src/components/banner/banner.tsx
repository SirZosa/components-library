import React from 'react'
import classNames from 'classnames'
import BannerText from "./bannerText";
import BannerTopic from "./banerTopic";
import './banner.css'

type BannerProps = {
    children: React.ReactNode
    type?: string
}

const TypeContext = React.createContext('')

function Banner({children, type='', ...rest}: BannerProps){
    const color = type === 'success' ? 'green' : type === 'warning' ? 'yellow' : type === 'error' ? 'red' : 'blue'
    const allClasses = classNames('banner', `color-${color}`)
    return (
        <TypeContext.Provider value={type}>
        <div className={allClasses} {...rest}>
            {children}
        </div>
        </TypeContext.Provider>
    )
}
Banner.Text = BannerText
Banner.Topic = BannerTopic
export default Banner
export { TypeContext }