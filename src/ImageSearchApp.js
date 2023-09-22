import { useState } from "react";

function ImageSearchApp() {
    const [images, setImages] = useState([]);

    async function search() {
        const apiKey = "37726328-4a2b1a654b17d6bad1ec74dba";
        const query = document.getElementById("query").value;

        // 이미지 검색
        const response = await fetch(
            `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=all`
        );

        const jsonData = await response.json();
        console.log(jsonData["hits"]);

        // 업데이트
        setImages(jsonData["hits"]);
    };

    return (
        <div>
            <input id="query"></input>
            <button onClick={search}>검색</button>
            <ul>
                {images.map((image) => (
                    <img 
                    className="Image"
                    key={image.id} 
                    width="100" 
                    height="100" 
                    src={image.largeImageURL} 
                    alt={image.tags}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ImageSearchApp;