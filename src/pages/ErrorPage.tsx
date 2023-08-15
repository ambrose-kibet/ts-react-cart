import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div>
      <h1>Error 404 </h1>
      <h2>page Not found</h2>
      <Link to="/">Back Home</Link>
    </div>
  );
};
export default ErrorPage;
