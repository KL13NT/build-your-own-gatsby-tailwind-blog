import { Link, graphql } from "gatsby"
import React from "react"

import "../styles/index.sass"

export default function Home({ data }) {
  const { nodes } = data.allMarkdownRemark

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-xl border-box text-white p-12">
      <h1 className="text-center pt-12 border-box text-4xl font-bold">
        Thoughts
      </h1>
      <ul className="w-4/5 m-auto mt-12 border-box grid grid-cols-2 gap-10">
        {nodes.map(({ frontmatter }) => (
          <li className="p-8 border-box bg-gray-700 rounded-lg">
            <Link to={frontmatter.slug} className="text-2xl font-bold">
              <h2>{frontmatter.title}</h2>
            </Link>
            <p className="mt-4">{frontmatter.introduction}</p>
            <span className="mt-4 block font-light text-base">
              {frontmatter.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          introduction
        }
      }
    }
  }
`
