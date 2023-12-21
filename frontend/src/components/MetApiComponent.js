import React, { useEffect, useCallback } from "react";

function MetApiComponent() {
    const fetchData = useCallback(() => {
        fetch('http://localhost:8080/arts')
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
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            <button onClick={fetchData}>
                Metropolitan Museum of Art
            </button>
        </div>
    );
};

export default MetApiComponent;
