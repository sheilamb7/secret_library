import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home';
import NoMatch from './pages/no-match';
import ChallengeContent from './pages/challenge_content';

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NoMatch />
    },
    {
      path: "/challenges/:challenges_name",
      element: <ChallengeContent />
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    {/* <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:slug" component={ChallengeContent} />
          <Route component={NoMatch} />
          <div>
            <img src="web_img/secret_library_logo.png" /> 
          </div>
        <h1>Challenges</h1>
      </Switch>
      </div>
    </Router> */}
    </>
  )
}

export default App
