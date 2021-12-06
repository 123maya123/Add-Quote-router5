import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import React, { useEffect } from 'react'
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from '../components/UI/LoadingSpinner'

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const {quoteId} = params;

  const{sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);
  //passing pointer in useHttp n starting in loading mode  by setting true

  useEffect(() => {
    sendRequest(quoteId);
  },[sendRequest,quoteId]);

  if(status === 'pending'){
    return(
       <div className='centered'>
         <LoadingSpinner/>
       </div>
    )
  }
  if(error){
    return <p className='centered'>{error}</p>;
  }
  
  if (!loadedQuote.text) {
    return <p>No Quote Found</p>;
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        {" "}
        <Comments />{" "}
      </Route>
      {/* <Route path={`/quotes/:quoteId/comments`}> <Comments/> </Route> */}
    </React.Fragment>
  );
};

export default QuoteDetail;
//quoteId becoz in app.js we gave our identifier the name quoteId that canbe asses here through params

//HighlightedQuote wants 2 parameters i.e. text n author

//css class centered n btn--flat are globally defined in index.js
