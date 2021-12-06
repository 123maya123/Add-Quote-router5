import { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api';

const NewQuote = () => {
    const {sendRequest, status} =useHttp(addQuote);
    //we could extract more data by object destructing but sendRequest, status.. all we need for now
    const history = useHistory();

    useEffect(() => {
        if(status === 'completed'){
            history.push('/quotes');
        }
    }, [status,history])

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData)
    }
    return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
}

export default NewQuote
//onAddQuote is defined in QuoteForm

//push() allows user to go back to page but replace dont allow user to go back
