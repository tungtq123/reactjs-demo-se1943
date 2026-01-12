import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LocationDisplay = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div>
      <p>Location Display</p>
      <p>Current path: {location.pathname}</p>
      <p>State: {JSON.stringify(location.state)}</p>
      <p>Hash: {location.hash}</p>
      <p>Search: {location.search}</p>
      <p>Key: {location.key}</p>
    </div>
  );
};
export default LocationDisplay;
