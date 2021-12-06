import { useEffect } from 'react'//to send request when the component AllQuotes loads
import QuoteList from '../components/quotes/QuoteList'
import useHttp from '../hooks/use-http'
import {getAllQuotes} from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import NoQuotesFound from '../components/quotes/NoQuotesFound'

const AllQuotes = () => {
    const { sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true);
    useEffect (() => {sendRequest()}, [sendRequest]);

    if (status === "pending") {
      return (
        <div className="centered">
          <LoadingSpinner />
        </div>
      );
    }
    if(error) {
        return <p className='centerd focused'>{error}</p>;
    }
    if(status === 'completed' && (!loadedQuotes || loadedQuotes === 0)){
        return <NoQuotesFound/>
    }
    return <QuoteList quotes = {loadedQuotes}/>
}
export default AllQuotes
//QuoteList component wants quotes prop
