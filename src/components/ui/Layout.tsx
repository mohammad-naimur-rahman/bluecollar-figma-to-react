import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({ title, meta, children }: { title: string; meta: ReactNode; children: ReactNode }) => {
  return (
    <div>
      <Helmet>
        <title>{title ? `Blue Collar | ${title}` : 'Blue Collar'}</title>
        {meta}
      </Helmet>
      {children}
    </div>
  )
}

export default Layout
