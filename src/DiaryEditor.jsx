import { useState, useRef } from 'react';
import styles from './DiaryEditor.module.css';

export const DiaryEditor = ({ addEntryToList }) => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [entry, setEntry] = useState({
    author: '',
    content: '',
    rating: 1,
    id: crypto.randomUUID(),
  });

  const handleChangeState = (e) => {
    if (e.target.name === 'author') {
      const author = e.target.value;
      setEntry({ ...entry, author, createdAt: new Date().getTime() });
    } else if (e.target.name === 'content') {
      const content = e.target.value;
      setEntry({ ...entry, content });
    } else if (e.target.name === 'rating') {
      const rating = e.target.value;
      setEntry({ ...entry, rating });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entry.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (entry.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    addEntryToList(entry);
    setEntry({
      author: '',
      content: '',
      rating: 1,
      id: crypto.randomUUID(),
    });
  };

  return (
    <section className={styles.DiaryEditor}>
      <h1>펫 일기장</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={handleChangeState}
          type="text"
          placeholder="Author"
          name="author"
          value={entry.author}
          ref={authorInput}
        />
        <textarea
          placeholder="Write your diary!"
          value={entry.content}
          name="content"
          onChange={handleChangeState}
          ref={contentInput}
        />
        <label htmlFor="rating">감정 점수</label>
        <select
          onChange={handleChangeState}
          id="rating"
          name="rating"
          value={entry.rating}
        >
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
