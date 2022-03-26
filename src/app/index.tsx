import * as React from 'react'
import './App.css'

export function App() {
  return (
    <div className="app">
      <div className="app__cam">
        <label>NAME</label>
        <div className="cam__sound"></div>
      </div>
      <div className="app__buttons">
        {
          //TODO one class
          /* <button className="Micro">M</button>
        <button className="Camera">C</button> */
        }
      </div>
      <div className="app__inputName">
        <label>Name:</label>
        <input></input>
      </div>
      <div className="app__panels">
        <div className="panels__connect">
          <form className="connect_form">
            <p>Connect to room</p>
            <div className="form__input">
              <label>Room ID:</label>
              <input></input>
            </div>
            <input type="submit" value="Create"></input>
          </form>
        </div>
        <div className="panels__create">
          <p>Create room</p>
          <button>Create</button>
        </div>
      </div>
    </div>
  )
}

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
