import React ,{useState,useEffect}from "react";

const Movie =()=>{
     const [movie, setMovie] = useState("");
  useEffect(() => {
   let id = window.location.pathname
  
    async function getData() {
      const response = await fetch(`/api/movie/?id=${id.replace('/','')}`);    
      const payload = await response.json();     
      setMovie(payload);
      
    }
    getData();
  }, []);
  return (
    <>
      <div>{movie?.original_title}</div>
    </>
  )
}

export default Movie;