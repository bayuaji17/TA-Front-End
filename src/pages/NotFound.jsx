
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json());


export const NotFound = () => {

  const { data, error, isLoading } = useSWR(
    "http://localhost:2000/api/disease",
    fetcher
  );
console.log(data);
  if (isLoading) {
    return <div>LAGI LOADING</div>;
  }
  if (error) {
    return (
      <div>
        <h1>error</h1>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {data.data?.map((penyakit, index) => (
          <li key={index}>{penyakit.nama_penyakit}</li>
        ))}
      </ul>
    </div>
  );
};
