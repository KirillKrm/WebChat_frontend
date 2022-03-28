import * as React from 'react'
import 'styles/global.css'
import { Camera } from '../app/components/Camera/index'
import { Button } from '../app/components/Button/index'
import { Input } from '../app/components/Input/index'

function MainPage() {
  return (
    <div className="app">
      <Camera />
      <div className="app__buttons">
        <Button name="M" />
        <Button name="C" />
      </div>
      <Input name="Name:" />
      <div className="app__panels">
        <div className="panels__connect">
          <form className="connect__form">
            <p>Connect to room</p>
            <Input name="Room ID:" />
            <button type="submit" onClick={() => alert('Connect')}>
              Connect
            </button>
          </form>
        </div>
        <div className="panels__create">
          <p>Create room</p>
          <button onClick={() => alert('Create')}>Create</button>
        </div>
      </div>
    </div>
  )
}

export default MainPage

// import { Helmet } from 'react-helmet-async';
// import { Switch, Route, BrowserRouter } from 'react-router-dom';

// import { GlobalStyle } from '../styles/global-styles';

// import { HomePage } from './pages/HomePage/Loadable';
// import { NotFoundPage } from './pages/NotFoundPage/Loadable';
// import { useTranslation } from 'react-i18next';

// export function App() {
//   const { i18n } = useTranslation();
//   return (
//     <BrowserRouter>
//       <Helmet
//         titleTemplate="%s - React Boilerplate"
//         defaultTitle="React Boilerplate"
//         htmlAttributes={{ lang: i18n.language }}
//       >
//         <meta name="description" content="A React Boilerplate application" />
//       </Helmet>

//       <Switch>
//         <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
//         <Route component={NotFoundPage} />
//       </Switch>
//       <GlobalStyle />
//     </BrowserRouter>
//   );
// }