import React, { useCallback, useState } from "react";

function NasaApiComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [title, setTitle] = useState(null);
    const [objectDate, setObjectDate] = useState(null);
    const [explanation, setExplanation] = useState(null);

    const fetchData = useCallback(() => {
        setIsLoading(true);
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
                setImageUrl(data.url);
                setTitle(data.title);
                if (data.title == null) {
                    setTitle("---Not Available---");
                }
                setObjectDate(data.objectDate);
                if (data.objectDate == null) {
                    setObjectDate("---Not Available---");
                }
                setExplanation(data.explanation);
                if (data.explanation == null) {
                    setExplanation("---Not Available---");
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div style={{ paddingTop: 30 }}>
            <button
                onClick={fetchData}
                style={{
                    height: 50,
                    width: 80,
                    borderRadius: 50,
                    cursor: "pointer",
                    backgroundColor: "cyan",
                    borderStyle: "inset",
                    borderColor: "blue",
                    fontSize: 18,
                }}
            >
                <b>NASA</b>
            </button>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 40,
                    height: "100%",
                }}
            >{isLoading ? (
                    <div className="loader">Loading</div>
                     // Loading animation
                ): imageUrl && (
                    <div>
                        <img
                            src={imageUrl}
                            alt="NASA"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                            }}
                        />
                        <div style={{ background: "rgb(221, 221, 221, 0.4)", fontSize: 20}}>
                            <h2>
                                <i>{title}</i>
                            </h2>
                            <p><b>{explanation}</b></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NasaApiComponent;
