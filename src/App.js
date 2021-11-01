
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch,
  useLocation
} from "react-router-dom";
import "./style2.css";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.
const App= (props) => {
  return(
    // <ParamsExample/>
    <NestingExample info={props.info}/>
  )
}

export default App;

const ParamsExample = () => {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <ul className="header">
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>
        <div className="content">
          <Switch>
            <Route path="/:id" children={<Child />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}


//---------------------------------------------------


const NestingExample = (props) => {
  return (
    <Router>
      <div>
      <Header/>
        <hr />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/topics">
              <Topics info={props.info} />
            </Route>
            <Route path={['*','topics/*']}>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const Header =() => {
return (
  <ul className="header">
          <li>
            <NavLink exact activeClassName="selected" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/topics">Topics</NavLink>
          </li>
        </ul>
)
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics(props) {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {props.info.map(x => (
          <li key={x.id}>
            <Link to={`${url}/${x.id}`}>{x.title}</Link>
          </li>
        ))}
      </ul>
      
  
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic info={props.info}/>
        </Route>
      </Switch>
    </div>
  );
}

function Topic(props) {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();


  return (
    <div>
      <h3>{topicId}</h3>
      {props.info.map(x => (
        x.id === topicId && x.info
      ))}
    </div>
  );
}

const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}