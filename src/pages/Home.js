import React, { useEffect, useState }  from 'react';
import SmoothieCard from '../components/SmoothieCard';
import supabase from "../config/supaClient";

const Home = () => {
  const [smoothies, setSmoothies] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [order, setOrder] = useState("created_at")

  const handleDelete = (id) => {
    setSmoothies(prevSmoothies => {
      return prevSmoothies.filter(smoothie => smoothie.id !== id)
    })
  }

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select()
        .order(order, { asceding: false })

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

  }, [order])

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {smoothies &&
        (<div className="smoothies">
         <div className="order-by">
            <p>Order by:</p>
            <button onClick={() => setOrder('created_at')}>Created</button>
            <button onClick={() => setOrder('title')}>Title</button>
            <button onClick={() => setOrder('rating')}>Rating</button>
          </div>
        <div className="smoothie-grid">
          {smoothies.map(smoothie =>
            <SmoothieCard
              key={smoothie.id}
              smoothie={smoothie}
              onDelete={handleDelete} />)}
        </div>
        </div>)
      }
    </div>

  );
}

export default Home