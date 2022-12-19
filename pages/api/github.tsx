import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const url = "https://api.github.com/users/israelias/repos?per_page=50"
    const response = await fetch(url).then((res => {
      if (res.ok) {
        return res.json()
      } else {
        return []
      }
    }))
    // const json = await response.json()

    const projectsList = []

    response?.forEach(p => {
        projectsList.push({
            "name": p.name,
            "stars": p.stargazers_count,
            "url": p.html_url,
            "description": p.description,
            "language": p.language,
            "homepage": p.homepage,
            "topics": p.topics,
            "created_at": p.created_at,
            "updated_at": p.updated_at,
        })
    })

    return res.status(200).json({
        repos: projectsList
    })
}
