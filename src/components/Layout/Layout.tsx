import { ReactNode, useEffect, useRef } from 'react'
import { FC } from 'react'

import { LayoutContainer, LayoutSpoth, SpothLight } from "./Layout.styles"

interface LayoutProps {
    children?: ReactNode;
 }
const Layout: FC<LayoutProps> = (props) => {
    const { children } = props 
    const spothLightClass: string = "spothlight"

    const getSpothLight = typeof document !== 'undefined' && document.getElementById(spothLightClass)

    const handleMouseMove = (event: any) => {
        const { clientX, clientY } = event;
    
        (getSpothLight as HTMLElement).style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #1a233e 10px, #0B132B 350px)`;
    }

    typeof document !== 'undefined' && document.addEventListener('mousemove', handleMouseMove)

    return (
        <LayoutContainer>
            <SpothLight id={spothLightClass}/>
            <LayoutSpoth>
                {children}
            </LayoutSpoth>
        </LayoutContainer>
    )
}

export default Layout