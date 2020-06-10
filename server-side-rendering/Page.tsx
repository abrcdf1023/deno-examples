// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1"
import ReactDOMServer from 'https://dev.jspm.io/react-dom@16.13.1/server'

interface PageProps {
  page: string;
  message: string;
}

const Page = ({page, message}: PageProps) => (
  <div>
    <h1>This is page with React</h1>
    <div>Page: {page}</div>
    <div>Message: {message}</div>
  </div>
)

export default (props: PageProps) => `
<!DOCTYPE html>
${ReactDOMServer.renderToString(<Page {...props} />)}
`