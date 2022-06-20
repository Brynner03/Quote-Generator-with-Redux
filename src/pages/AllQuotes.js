import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Brynner', text: 'Learning React is fun'},
    { id: 'q2', author: 'Ventura', text: 'Learning React is okay'},
]

function AllQuotes() {
  return (
  <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default AllQuotes