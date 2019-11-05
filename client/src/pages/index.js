import React from "react"
import { graphql, Link } from "gatsby"
import slugify from "slugify"

export const query = graphql`
  query {
    graphcollective {
      interviews {
        id
        title
        description
      }
    }
  }
`
export default ({ data }) => (
  <div>
    <ul>
      {data.graphcollective.interviews.map(interview => {
        return (
          <li key={interview.id}>
            <Link
              to={slugify(interview.title, {
                remove: /\W /g,
                lower: true,
              })}
            >
              {interview.title}
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
)
