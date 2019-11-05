const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      graphcollective {
        interviews {
          id
          title
        }
      }
    }
  `)

  if (result.errors) {
    console.error("oops", result.errors)
  }

  const interviews = result.data.graphcollective.interviews

  interviews.forEach(interview => {
    actions.createPage({
      path: slugify(interview.title, {
        remove: /\W /g,
        lower: true,
      }),
      component: require.resolve("./src/templates/interview.js"),
      context: {
        interviewId: interview.id,
      },
    })
  })
}
