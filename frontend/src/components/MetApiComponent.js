import React, { useState, useCallback } from "react";

function MetApiComponent() {
    const [imageUrl, setImageUrl] = useState(null);
    const [title, setTitle] = useState(null);
    const [culture, setCulture] = useState(null);
    const [period, setPeriod] = useState(null);
    const [date, setDate] = useState(null);
    const [artist, setArtist] = useState(null);
    const [artistBio, setArtistBio] = useState(null);

    const fetchData = useCallback(() => {
        fetch('http://localhost:8080/api/arts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Image:", data.primaryImage);
                console.log("Title:", data.title);
                console.log("Culture:", data.culture);
                console.log("Period:", data.period);
                console.log("Date:", data.objectDate);
                console.log("Artist:", data.artistDisplayName);
                console.log("Artist Info:", data.artistDisplayBio);
                setImageUrl(data.primaryImage);
                setTitle(data.title);
                if (data.title == null || data.title === " " || data.title === "") {
                    setTitle("---Not Available---");
                }
                setCulture(data.culture);
                if (
                    data.culture == null ||
                    data.culture === " " ||
                    data.culture === ""
                ) {
                    setCulture("---Not Available---");
                }
                setDate(data.objectDate);
                if (
                    data.objectDate == null ||
                    data.objectDate === " " ||
                    data.objectDate === ""
                ) {
                    setDate("---Not Available---");
                }
                setPeriod(data.period);
                if (
                    data.period == null ||
                    data.period === " " ||
                    data.period === ""
                ) {
                    setPeriod("---Not Available---");
                }
                setArtist(data.artistDisplayName);
                if (
                    data.artistDisplayName == null ||
                    data.artistDisplayName === " " ||
                    data.artistDisplayName === ""
                ) {
                    setArtist("---Not Available---");
                }
                setArtistBio(data.artistDisplayBio);
                if (
                    data.artistDisplayBio == null ||
                    data.artistDisplayBio === " " ||
                    data.artistDisplayBio === ""
                ) {
                    setArtistBio("---Not Available---");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div style={{ paddingTop: 10 }}>
            <button
                onClick={fetchData}
                style={{
                    height: 50,
                    width: "auto",
                    borderRadius: 50,
                    cursor: "pointer",
                    backgroundColor: "cyan",
                    borderColor: "blue",
                    fontSize: 18,
                }}
            >
                <b>Metropolitan Museum of Art</b>
            </button>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 20,
                }}
            >
                {imageUrl && (
                    <div>
                        <img
                            src={imageUrl}
                            alt="Met Art"
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                        <div style={{ background: "rgb(221, 221, 221, 0.4)", fontSize: 20 }}>
                            <h2><i>{title}</i></h2>
                            <p><b>Culture: {culture}</b></p>
                            <p><b>Date: {date}</b></p>
                            <p><b>Period: {period}</b></p>
                            <p><b>Artist: {artist}</b></p>
                            <p><b>Artist Bio: {artistBio}</b></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MetApiComponent;
