import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import supabase from '../config/supaClient';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  useEffect(() => {
    const fetchSmoothie = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select()
        .eq("id", id)
        .single(); // with single, query returns an error if id not found, without it returns an empty array


      if (error) navigate("/", { replace: true });
      if (data) {
        console.log(data);
        setTitle(data.title);
        setMethod(data.method);
        setRating(data.rating);

      }
      fetchSmoothie();
    }, [id, navigate]);

  return (
    <div className="page update">
      <h2>Update</h2>
    </div>
  )
}

export default Update