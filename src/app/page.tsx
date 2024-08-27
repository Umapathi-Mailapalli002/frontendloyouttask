"use client"
import React, { useEffect, useState } from "react";
import {DropDown, FeatureCard, Navbar, Searchbar} from "./components/index";

interface Course {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  percentageWatched: number;
}

const normalizeString = (str: string) => str.trim().toLowerCase();

export default function Home() {
  const [cardsData, setCardsData] = useState<{ [key: string]: Course[] }>({});
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Fetch data and initialize state
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch('/cardsData.json');
        if (!res.ok) {
          throw new Error('Failed to fetch the data');
        }
        const data = await res.json();
        setCardsData(data);

        // Extract categories and normalize them
        const normalizedCategories = Object.keys(data).map(category =>
          category
        );
        setCategories(normalizedCategories);

        // Initialize filtered courses
        setFilteredCourses(Object.values(data).flat());
      } catch (error) {
        setError((error as Error).message);
      }
    };
    fetchCards();
  }, []);

  // Search functionality
  useEffect(() => {
    const allCourses = Object.values(cardsData).flat();
    const normalizedSearchTerm = normalizeString(searchTerm);

    if (normalizedSearchTerm === "") {
      setFilteredCourses(allCourses);
      return;
    }

    const matchingCategory = Object.keys(cardsData).find(category =>
      normalizeString(category).includes(normalizedSearchTerm)
    );

    if (matchingCategory) {
      setFilteredCourses(cardsData[matchingCategory]);
    } else {
      const results = allCourses.filter(course =>
        normalizeString(course.name).includes(normalizedSearchTerm) ||
        course.technologies.some(tech =>
          normalizeString(tech).includes(normalizedSearchTerm)
        )
      );
      setFilteredCourses(results);
    }
  }, [searchTerm, cardsData]);

  // Handle category change
  useEffect(() => {
    const normalizedSelectedCategory = normalizeString(selectedCategory);

    if (normalizedSelectedCategory) {
      const rawCategoryKey = Object.keys(cardsData).find(category =>
        normalizeString(category).includes(normalizedSelectedCategory)
      );

      if (rawCategoryKey) {
        setFilteredCourses(cardsData[rawCategoryKey]);
      } else {
        setFilteredCourses([]);
      }
    } else {
      setFilteredCourses(Object.values(cardsData).flat());
    }
  }, [selectedCategory, cardsData]);

  // Debug logs
  useEffect(() => {
    console.log('Search Term:', searchTerm);
    console.log('Cards Data:', cardsData);
    console.log('Filtered Courses:', filteredCourses);
    console.log('Selected Category:', selectedCategory);
  }, [searchTerm, cardsData, filteredCourses, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSearchTerm("")
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="dark:bg-slate-800 bg-white">
        <Navbar />
        <div className="m-4 md:ml-60 lg:ml-72 lg:pt-24 md:pt-24">
          <Searchbar value={searchTerm} change={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="mt-3 ml-4 sm:flex sm:justify-end sm:-mt-14 md:-mt-14 sm:mr-9">
          <DropDown onCategoryChange={handleCategoryChange} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:ml-60 lg:mr-3 md:ml-44 mt-20 md:mt-16 gap-5">
          {filteredCourses.map((course) => (
            <div key={course.id} className="">
              <FeatureCard
                name={course.name}
                description={course.description}
                tech={course.technologies.join(", ")}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
