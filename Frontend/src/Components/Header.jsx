import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import searchi from '../Assets/search.svg';
import globali from '../Assets/gloval.svg';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  async function searchPlace(placename) {
    if (placename.trim()) {
      const place = await fetch(`http://localhost:3004/searchbyplace/${placename}`);
      const places = await place.json();
      setSearchResults(places);
    } else {
      setSearchResults([]);
    }
  }

  useEffect(() => {
    searchPlace(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <div className="navbar-container">
        <div className="info">
          <div className="menu">
            <Link to={"/Destination"}>
              <span className="blocks">Destination</span>
            </Link>
            <Link to={"Explore/"}>
              <span className="blocks">Explore</span>
            </Link>
          </div>
          <div className="logo"></div>
          <Link to={"/"}>
            <p className="blocks-">
              INCREDIBLE <span className="blocks--">O</span>DISHA
            </p>
          </Link>
          <div className="navbar-right">
            <ul className="menu-">
              <li>
                <form onSubmit={handleSearchSubmit} className="bt">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    autoComplete="off"
                  />
                  <button type="submit" className="sbt">
                    <img src={searchi} alt="Search" />
                  </button>
                </form>
                {searchTerm && searchResults.length > 0 && (
                  <div className="search-results">
                    {searchResults.map((result) => (
                      <div key={result.id} className="search-result-item">
                        <Link to={`/place-details/${result.id}`} onClick={() => setSearchTerm('')}>
                          {result.place_name}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>
              <li className="li-">
                <a href="#" className="m-">
                  <img src={globali} alt="Language" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
