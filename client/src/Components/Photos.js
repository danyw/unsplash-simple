import {useState, useEffect} from 'react';
const Photos = () => {

    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        const title = "dog"
        fetch(`http://localhost:5001/searchImage?title=${title}`)
        .then(res => res.json())
        .then(data => setBackendData(data))
    }, [])
    return ( 
        <div className="photosContainer">
           
         </div>
     );
}
 
export default Photos;