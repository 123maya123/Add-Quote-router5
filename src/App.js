import React, {Suspense} from 'react';
import { Route, Switch, Redirect } from "react-router";
import CommentsList from "./components/comments/CommentsList";
import NewCommentForm from "./components/comments/NewCommentForm";
import Comments from "./components/comments/Comments";
import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import LoadingSpinner from './components/UI/LoadingSpinner';
//lazy loading://whenOnly NewQuote needed react'll execute this,same with other components
const NewQuote = React.lazy(() => import('./pages/NewQuote'));//import NewQuote from './pages/NewQuote';
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));//import QuoteDetail from './pages/QuoteDetail';
const NotFound = React.lazy(() => import('./pages/NotFound'));//import NotFound from './pages/NotFound';
//in React Router6 switch doesnt exist anymore so we need to replce switch with Routes
//to install router6 go to terminal n type npm install react-router-dom@6 or latest

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner/></div>}>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes/>
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail/>
        </Route>
        <Route path='/new-quote'>
          <NewQuote/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
/*now go to index.js there import { BrowserRouter } from 'react-router-dom'; 
n wrap your app component with <BrowserRouter> */

/*<Route path='*'></Route> this signals react rounter any path should match this route so this page will
match if no other route matches */
