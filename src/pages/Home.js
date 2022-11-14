import React, { useEffect, useState }  from 'react';
import Smoothie from '../components/Smoothie';
import supabase from "../config/supaClient";

const Home = () => {
  const [smoothies, setSmoothies] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select();

      if (error) {
        setFetchError("Oops, something went wrong. Can't get smoothies");
        setSmoothies(null);
      }
      if (data) {
        setSmoothies(data);
        setFetchError(null);
      }
    }

    fetchSmoothies();

}, [])
  return (
    <div className="page home">
      {fetchError && <p>fetchError</p>}
      {smoothies &&
        (<div className="smoothies">
          {smoothies.map(smoothie => <Smoothie smoothie={smoothie} />)}

        </div>)
      }
    </div>

  );
}

export default Home