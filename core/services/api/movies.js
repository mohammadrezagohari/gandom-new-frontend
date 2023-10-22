// import axios from "axios";
// export const getMoviesData = async () => {
//   const response = await axios.get(
//     "http://moviesapi.ir/api/v1/movies?page={page}",
//   );
//   console.log("status", response);
//   if (response.status !== 200) {
//     return null;
//   }
//   return response?.data;
// };

export const getMoviesData=async ()=>{
    const data = await fetch("http://moviesapi.ir/api/v1/movies?page={page}",
    {cache:"no-store"} // in default is "ssg"  when you write {cache:"no-store"}  change to "ssr"  and for "isr" you write {next:{ravalidate:"60"}} (60 means refres besho har 60 sanie)
    );
    return data.json();
}

export const getSingleMovieData=async (id)=>{
    const data = await fetch(`http://moviesapi.ir/api/v1/movies/${id}`,
    {cache:"no-store"} // in default is "ssg"  when you write {cache:"no-store"}  change to "ssr"  and for "isr" you write {next:{ravalidate:"60"}} (60 means refres besho har 60 sanie)
    );
    return data.json();
}
