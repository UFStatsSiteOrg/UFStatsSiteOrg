import { HomePage, OfficerPage, InternshipPage, PollsPage, RPage } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/officers">
          <OfficerPage/>
        </Route>
        <Route path="/internships">
          <InternshipPage/>
        </Route>
        <Route path="/polls">
          <PollsPage/>
        </Route>
        <Route path="/r">
          <RPage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
