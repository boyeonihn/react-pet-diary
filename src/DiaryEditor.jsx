import { useState } from 'react';

export const DiaryEditor = () => {
  const [entry, setEntry] = useState({
    author: '',
    content: '',
    rating: '',
  });

  const handleAuthorChange = (e) => {
    const author = e.target.value;
    setEntry({ ...entry, author });
  };

  const handleContentChange = (e) => {
    const content = e.target.value;
    setEntry({ ...entry, content });
  };

  const handleRating = (e) => {
    const rating = e.target.value;
    setEntry({ ...entry, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(entry);
  return (
    <section className="DiaryEditor">
      <h1>펫 일기장</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleAuthorChange}
          type="text"
          placeholder="Author"
          name="author"
          value={entry.author}
        />
        <textarea
          placeholder="Write your diary!"
          value={entry.content}
          onChange={handleContentChange}
        />
        <label htmlFor="rating">Today's Rating</label>
        <select onChange={handleRating} id="rating" value={entry.rating}>
          <option value=""></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button>일기 저장하기</button>
      </form>
    </section>
  );
};
