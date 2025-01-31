import React from 'react'
import { BiSolidCheckCircle, BiErrorAlt } from 'react-icons/bi'
import { AiFillWarning } from 'react-icons/ai'
import { BsInfoLg } from 'react-icons/bs'
import { TypeContext } from './banner'

type BannerTopicProps = {
    children: React.ReactNode
}

export default function BannerTopic({children, ...rest}: BannerTopicProps){
    const type = React.useContext(TypeContext)
    return (
        <div className='banner-flex' {...rest}>  
                {type === 'success' ? <BiSolidCheckCircle/> : type === 'warning' ? <AiFillWarning/> : type === 'error' ? <BiErrorAlt/> : <BsInfoLg/>}
                <div className='banner-topic'>{children}</div>
             </div>
    )
}