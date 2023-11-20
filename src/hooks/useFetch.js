import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
    const [data, setData] = useState([]);

    const useData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setData(responseData);
        } catch (error) {
            console.log("Error", error);
        }
    }
    useEffect(() => {
        useData();
    }, []);
    return { data }
}
export default useFetch;
