import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../axiosConfig";
import { MainContext } from "./ContextProvider/MainContext";

const SearchComponent = () => {
  const [search, setSearch] = useState(""); // State to store the search term
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchResultRef } = useContext(MainContext);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    setSearchParam();
    // if (search.trim() === "") {
    //   console.log("empty search", search);
    //   setSearchParams({}); // Clear the query string
    //   navigate("/home", { replace: true });
    // } else {
    //   setSearchParams({ keyword: search }); // Update the URL query param
    //   navigate("/home?keyword=" + search, { replace: true });

    //   // Fetch data from your API using the search keyword
    //   // fetchSearchResults(search);
    // }
  };

  function setSearchParam() {
    if (search.trim() === "") {
      console.log("empty search", search);
      setSearchParams({}); // Clear the query string
      navigate("/home", { replace: true });
      // Scroll to the results section if there's a valid query
    } else {
      setSearchParams({ keyword: search }); // Update the URL query param
      searchResultRef.current.scrollIntoView({ behavior: "smooth" });
      navigate("/home?keyword=" + search, { replace: true });
    }
  }
  useEffect(() => {
    setSearchParam();
  }, [search]);

  // const fetchSearchResults = async (keyword) => {
  //   try {
  //     const response = await axiosInstance.get(`/api/search`, {
  //       params: {
  //         keyword,
  //       },
  //     });
  //     console.log("Fetched data:", response.data);
  //     // Set your data to state or handle the results as needed
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //   }
  // };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="form-control ms-2"
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(e.target.value);
        }} // Capture input changes
        aria-label="Search"
      />
      {/* <button type="submit">Search</button> */}
    </form>
  );
};

export default SearchComponent;
