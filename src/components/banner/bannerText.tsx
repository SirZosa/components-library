import React from 'react'
import { TypeContext } from './banner'
import classNames from 'classnames'
type BannerTextProps = {
    children: React.ReactNode
}
export default function BannerText({children, ...rest}: BannerTextProps){
    const type = React.useContext(TypeContext)
    const tp = type ? type : 'neutral'
    const bannerTextClasses = classNames('banner-text', `banner-text-${tp}`)
    return (
        <div className={bannerTextClasses} {...rest}>{children}</div>
    )
}