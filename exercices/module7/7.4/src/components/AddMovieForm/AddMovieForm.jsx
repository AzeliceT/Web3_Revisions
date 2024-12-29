import { useState } from "react";
import "./AddMovieForm.css";
import { Input, Button } from 'antd';

const AddMovieForm = ({ onMovieAdded }) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now(), // Générer un identifiant unique
      title,
      director,
      duration,
      imageUrl,
      description,
      budget,
    };
    onMovieAdded(newMovie);
    setTitle("");
    setDirector("");
    setDuration(0);
    setImageUrl("");
    setDescription("");
    setBudget(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Director:</label>
        <Input value={director} onChange={(e) => setDirector(e.target.value)} />
      </div>
      <div>
        <label>Duration:</label>
        <Input value={duration} onChange={(e) => setDuration(e.target.value)} />
      </div>
      <div>
        <label>Image URL:</label>
        <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <Input.TextArea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Budget:</label>
        <Input value={budget} onChange={(e) => setBudget(e.target.value)} />
      </div>
      <Button type="primary" htmlType="submit">Add Movie</Button>
    </form>
  );
};

export default AddMovieForm;