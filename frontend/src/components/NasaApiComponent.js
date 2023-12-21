import React, { useEffect, useCallback } from "react";

function NasaApiComponent() {
    const fetchData = useCallback(() => {
        fetch('http://localhost:8080/api/nasaPodData')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Title:", data.title);
                console.log("Date:", data.objectDate);
                console.log("url:", data.url);
                console.log("Explanation:", data.explanation);
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
                NASA
            </button>
        </div>
    );
};

export default NasaApiComponent;
