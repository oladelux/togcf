import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './constants/routes'

import { Layout } from './components/Layout/Layout'
import { Homepage } from './views/Homepage/Homepage'
import { EventsView } from './views/EventsView/EventsView'
import { SingleEventView } from './views/SingleEventView/SingleEventView'

export const AppRoutes: FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={routes.home} element={<Homepage />}/>
          <Route path={routes.event} element={<EventsView />}/>
          <Route path={routes.singleEvent} element={<SingleEventView />}/>
        </Routes>
      </Layout>
    </>
  )
}
