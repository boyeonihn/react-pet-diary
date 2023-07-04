import { useState } from 'react';

export const DiaryEditor = () => {
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState();
  const [content, setContent] = useState('');

  const handleAuthorChange = (e) => {
    const authorInput = e.target.value;
    setAuthor(authorInput);
  };

  const handleRating = (e) => {
    const ratingInput = e.target.value;
    console.log(ratingInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="DiaryEditor">
      <h1>펫 일기장</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleAuthorChange}
          type="text"
          placeholder="Author"
          name="author"
          value={author}
        />
        <textarea placeholder="Write your diary!"></textarea>
        <label htmlFor="rating">Today's Rating</label>
        <select onChange={handleRating} id="rating" value={entry.rating}>
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button>일기 저장하기</button>
      </form>
    </section>
  );
};
