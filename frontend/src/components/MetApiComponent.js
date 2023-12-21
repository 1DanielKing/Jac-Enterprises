
// import React from "react";
// import HomePage from "../pages/HomePage";

// class YourComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.MetApiComponent = this.MetApiComponent.bind(this);
//     }
//     MetApiComponent() {
//         fetch("http://localhost:8080/arts")
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("Image:", data.primaryImage);
//                 console.log("Title:", data.title);
//                 console.log("Culture:", data.culture);
//                 console.log("Period:", data.period);
//                 console.log("Date:", data.objectDate);
//                 console.log("Artist:", data.artistDisplayName);
//                 console.log("Artist Info:", data.artistDisplayBio);
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//             });
//     }

//     render() {
//         return (
//             <div>
//                 <button id="metBtn" onClick={this.MetApiComponent}>
//                     Metropolitan Museum of Art
//                 </button>
//             </div>
//         );
//     }
// }