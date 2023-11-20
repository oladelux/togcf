import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './constants/routes'

import { Layout } from './components/Layout/Layout'
import { Homepage } from './views/Homepage/Homepage'

export const AppRoutes: FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={routes.home} element={<Homepage />}/>
        </Routes>
      </Layout>
    </>
  )
}
