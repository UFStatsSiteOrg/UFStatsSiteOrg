import { HomePage, OfficerPage, InternshipPage, PollsPage, RPage, ContactPage } from './components'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router basename="/" hashType="noslash">
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
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
        <Route path="/contact">
          <ContactPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
