import { ReactNode, FC } from 'react'

import { Layout } from "./RightLayout.styles"

interface RightLayoutProps {
    children?: ReactNode;
}
const RightLayout: FC<RightLayoutProps> = (props) => {
    const { children } = props

    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default RightLayout