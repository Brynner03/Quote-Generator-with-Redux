import { Route, useParams } from 'react-router-dom'
import { Fragment } from 'react'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Brynner', text: 'Learning React is fun'},
  { id: 'q2', author: 'Ventura', text: 'Learning React is okay'},
]

function QuoteDetail() {
  const params = useParams()

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail