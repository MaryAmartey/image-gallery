import React, {useState, useEffect} from "react";
import ImageCard from "./components/ImageCard";
import LoadingSpinner from "./components/LoadingSpinner";
import ImageSearch from "./components/ImageSearch";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [images, setImages]= useState([])
  const [isLoading, setIsLoading]= useState(true)
  const [term, setTerm]= useState([''])


  async function fetchData(){
    try{
      let url_api = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true"`
      const response = await fetch(url_api)
      const data = await response.json()
      setImages(data.hits)
      setIsLoading(false);
      console.log(data)
    }
    catch (error) {
      console.error(error);
    }
    
  }

  useEffect(() => {
    fetchData();
  },[term])

  return (
    <div className="container mx-auto">
      <Navbar color="var(--cool-cold)"  />
        <ImageSearch searchText={(text) => setTerm(text)}/>

        {!isLoading && images.length===0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }


        {isLoading ? <LoadingSpinner/> : <div className="bg-100 bg-900 py-10 px-12 cool">
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map(image =>(
            <ImageCard key={image.id} image={image}/>
          ))}
          </div>
        </div>}
    </div>
  );
}

export default App;
