import { useParams } from 'react-router-dom';

export const SingleNews = () => {
	const params = useParams();

	console.log({ params });

	return <div>SingleNews</div>;
};
