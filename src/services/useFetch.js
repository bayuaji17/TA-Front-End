import useSWR from "swr";
import http from "../utils/http";

const fetcher = url => http.get(url).then(res => res.data);

const useFetch = (url) => {
    
    const { data, error } = useSWR(url, fetcher)
    return {
        data, error, isLoading: !data && !error,
    }
}

export default useFetch