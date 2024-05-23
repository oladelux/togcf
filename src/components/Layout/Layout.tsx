import React, {FC, PropsWithChildren} from 'react'
import { title } from '../../constants/constant'
import { MetaHead } from "../MetaHead/MetaHead"
import { Header } from "../Header/Header"
import { Footer } from '../Footer/Footer'

import './Layout.scss'

export const Layout: FC<PropsWithChildren> = props => {
    return (
        <>
            <MetaHead title={title}/>
            <Header/>
            <div className='layout'>{props.children}</div>
            <Footer />
        </>
    )
}
