import { useEffect } from 'react'
import ReactGA from 'react-ga'

// fires a GA pageview every time the route changes
export default function GoogleAnalyticsReporter({ location: { pathname, search } }) {
