import { useState, useEffect } from "react";

const useFetch = <T>(urlToFetch: string) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [errors, setErrors] = useState<boolean>(false);
	const [data, setData] = useState<T>();
	const [errorMsg, setErrorMsg] = useState<string>("");

	useEffect(() => {
		const fetching = async () => {
			try {
				const response = await fetch(urlToFetch);

				const results = await response.json();
				setData(results);
				setLoading(false);
			} catch (error) {
				setErrorMsg("Uh Oh, something bad happened");
				setLoading(false);
				setErrors(true);
			}
		};

		fetching();
	}, [urlToFetch]);

	return { data, loading, errors, errorMsg };
};

export default useFetch;
