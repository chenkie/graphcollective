import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($interviewId: ID!) {
    graphcollective {
      interview(id: $interviewId) {
        id
        title
        description
      }
    }
  }
`
export default ({ data }) => (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
)
