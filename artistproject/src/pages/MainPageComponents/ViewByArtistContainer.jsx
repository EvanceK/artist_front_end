// import ArtistViewContainer from "./ArtistViewContainer";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { MainPageContext } from "../../components/ContextProvider/MainPageContext";

export default function ViewByArtistContainer() {
  const { id } = useParams();
  const { artistList, getArtistList } = useContext(MainPageContext);
  const [selectedArtist, setSelectedArtist] = useState({});
  useEffect(() => {
    // Fetch artist list when the component mounts
    getArtistList();
  }, []);
  useEffect(() => {
    // const findArtist = artistList.find((ar) => ar.artistId == id);
    // setSelectedArtist(findArtist);
    // Check if artistList has data before searching for the artist
    if (artistList.length > 0) {
      const findArtist = artistList.find((ar) => ar.artistId == id);
      setSelectedArtist(findArtist || null); // Handle case when artist is not found
    }
  }, [id, selectedArtist, artistList]);

  if (!selectedArtist) {
    return <p className="container mt-5 pt-5">plase select an artist...</p>; // Handle loading or no artist found
  }
  return (
    <>
      <div className="container mt-5 pt-5">
        <h2>Artist: {selectedArtist.artistName}</h2>
        <p>ArtistID : {id}</p>
        <p>
          Wikipidia:{" "}
          <a target="_blank" href={selectedArtist.url}>
            {selectedArtist.url}
          </a>
        </p>
        <h4>Description:</h4>
        <p>{selectedArtist.desciption}</p>
      </div>

      {/* <ArtistViewContainer></ArtistViewContainer> */}
    </>
  );
}
