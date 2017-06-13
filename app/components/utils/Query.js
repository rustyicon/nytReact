import axios from "axios";

const apiKey = `73c5a03f1e21413190a2edd867fe2775`;

const SearchRequest {
    runQuery(article) {
        let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${article}`;
        
        axios.get(queryURL)
            .then((response => {
                console.log(response);
            })
            .catch((response =>{
                console.log(response);
            });
    

    }
}

export default SearchRequest;