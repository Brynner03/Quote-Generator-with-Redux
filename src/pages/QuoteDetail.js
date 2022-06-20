import { Route, useParams } from 'react-router-dom'
import { Fragment } from 'react'

import Comments from '../components/comments/Comments'

function QuoteDetail() {
  const params = useParams()

  return (
    <Fragment>
      <div>QuoteDetail</div>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail