import {Key, useEffect, useState, Fragment} from "react";
// import { api } from '../lib/config'
import fetch from 'isomorphic-unfetch'
import React from 'react'

function getLanguageColor(language: any) {
  switch (language) {
    case "JavaScript":
      return "#f1e05a";
    case "Python":
      return "#3572A5";
    case "HTML":
      return "#e34c26";
    case "CSS":
      return "#480ca8";
    case "TypeScript":
          return "#2b7489";
      case "Vue":
            return "#2c3e";
    default:
      return "#000000";

  }
}

const ProjectListFull = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] =  useState(false);
  const [projects, setProjects] = useState([])

  // const fetchData =  () => {
  //   // setLoading(true)
  //   const res = fetch('/api/github')
  //   // const data = await res.json()
  //   return res
  //   // return Promise.resolve(data ?? [])
  //
  // }

  useEffect(() => {
    setLoading(true)
   const project = fetch('/api/github')
    if (project) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setProjects(project)
      setLoading(false)
    }
 },[])

  if (!projects)
    return (
      <div style={{ width: "100%" }}>
        Failed to load projects! Please check your internet connection. If the
        error persists, contact me.
      </div>
    );
  if (loading)
    return (
      <div style={{ width: "100%" }}>
        {/*<div>*/}
          <input
            aria-label="Search by name, description, and language"
            placeholder="Search by name, description, and language"
          />
          {/*<InputRightElement children={<SearchIcon color="gray.500" />} />*/}
        {/*</div>*/}
        {/*<div >*/}
        {/*  {[...Array(10)].map((_, i) => (*/}
        {/*    <Skeleton key={i} h="250px" />*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    );

  // Object(projects?.repos)
  // console.log(projects)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const filteredProjects = projects?.repos?.filter(
      (project: { name: string; description: string; language: string }) =>
        project?.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        project?.description
          ?.toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        project?.language?.toLowerCase().includes(searchValue.toLowerCase())
    )

    //sort repos by created_at

    .sort((a: {  created_at: string }, b: { created_at: string }) => {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });

  return (
    <>
      <div >
        <input
          aria-label="Search by name, description, and language"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search by name, description, and language"
        />
        {/*<InputRightElement children={<SearchIcon color="gray.500" />} />*/}
      </div>
      <div >
        {!filteredProjects?.length && (
          <p>
            No projects found for <strong>{searchValue}</strong>!
          </p>
        )}
        {filteredProjects?.map(
          (
            p: {
              homepage: string;
              name: string;
              description: string;
              url: string;
              language: string;
              stars: number;
              stargazers_url: string;
            },
            index: Key
          ) => (
         <Fragment key={index}>
           <hr/>
           {p.homepage}
           <br/>

           {p.name}
           <br/>
           {p.description}
           <br/>
           {p.url}
           <br/>
           {getLanguageColor(p.language)}
           {p.language}
           <br/>
           {p.stars}
           <br/>
           {p.stargazers_url}
           <hr/>
         </Fragment>


          )
        )}
      </div>
    </>
  );
};

export default ProjectListFull;
