import * as React from 'react'
import './App.css'
import { Camera } from './components/Camera/index'
import { Button } from './components/Button/index'

export function App() {
  return (
    <div className="app">
      <Camera />
      <div className="app__buttons">
        <Button />
        <Button />
      </div>
      <div className="app__inputName">
        <label>Name:</label>
        <input></input>
      </div>
      <div className="app__panels">
        <div className="panels__connect">
          <form className="connect__form">
            <p>Connect to room</p>
            <div className="form__input">
              <label>Room ID:</label>
              <input></input>
            </div>
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

export default App

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
