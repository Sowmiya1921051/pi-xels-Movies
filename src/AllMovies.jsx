import  React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";

const AllMovies= ()=>{
   const [movies, setMovies] = useState([]);
      async function getData() {
      const data = await fetch('/api/movies');
      const payload = await data.json();
        console.log(payload)
      setMovies(payload);      
    }
  useEffect(() => { getData()},[]);
  return(
    <>
    <div>
       {movies.map((data,i)=>(
        <div key={data.id}>
        <div >
         <Link to={`/${data.id}`}> {data.original_title}</Link> 
         
          
          </div>
          <div>{data.tagline}</div>
           <div>{data.vote_average}</div>
      </div>
      ))}     
      </div>
    
    </>
  )
}

export default AllMovies;