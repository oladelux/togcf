import React, {FC} from 'react'
import { title } from '../../constants/constant'
import { MetaHead } from "../MetaHead/MetaHead"
import { Header } from "../Header/Header"

type LayoutProps = {
    children?: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <>
            <MetaHead title={title}/>
            <Header/>
            <div className='layout'>{children}</div>
        </>
    )
}
