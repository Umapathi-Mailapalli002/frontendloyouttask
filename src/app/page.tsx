"use client"
import react, { useEffect, useState } from "react";
import DropDown from "./components/DropDown";
import FeatureCard from "./components/FeatureCard";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

export default function Home() {
  const [cardsData, setCardsData] = useState<{ [key: string]: Course[] }>({});
    const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCards = async() =>{
      try {
        const res = await fetch('/cardsData.json'); // Fetch from the public directory directly
        if (!res.ok) {
          throw new Error('Failed to fetch the data');
        }
        const data = await res.json();
        setCardsData(data); // Save the data in state
        console.log(data.webDevelopment)
        console.log()

      } catch (error:string) {
        setError(error.message); // Set error state if fetching fails
      }
    }
    fetchCards();
  },[]);
 
  return (
    <>
    <Navbar/>
    <div className="m-4  md:ml-60 lg:ml-72">
      <Searchbar/>
    </div>
    <div className=" mt-3 ml-4 sm:flex sm:justify-end sm:-mt-14 md:-mt-14 sm:mr-9">
      <DropDown/>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:ml-44 mt-20 md:mt-16 ">
    {Object.entries(cardsData).flatMap(([category, courses]) =>
        courses.map((course) => (
          <div key={`${category}-${course.id}`} className="">
            <FeatureCard
              name={course.name}
              description={course.description}
              tech={course.technologies.join(", ")}
            />
          </div>
        ))
      )}
    </div>
    </>
  );
}
