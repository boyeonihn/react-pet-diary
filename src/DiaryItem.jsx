import styles from './DiaryItem.module.css';
import { useState } from 'react';
export const DiaryItem = ({
  author,
  content,
  rating,
  id,
  createdAt,
  deleteEntry,
  editEntry,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const [localRating, setLocalRating] = useState(rating);
  const handleContentChange = (event) => {
    const content = event.target.value;
    setLocalContent(content);
  };

  const handleRatingChange = (event) => {
    const rating = event.target.value;
    setLocalRating(rating);
  };
  const onEdit = (event) => {
    const id = event.target.className;
    const entry = {
      content: localContent,
      rating: localRating,
    };
    editEntry(entry, id);
    toggleIsEdit();
  };

  return (
    <div className={styles.DiaryItem}>
      <button className={id} onClick={onEdit}>
        {isEdit ? '저장하기' : '수정하기'}
      </button>
      <div className={styles.info}>
        <h4>작성자: {author}</h4>
        <div className={styles.selectBox}>
          {isEdit ? (
            <>
              <label htmlFor="rating">감정 점수</label>
              <select
                id="rating"
                name="rating"
                onChange={handleRatingChange}
                value={rating}
              >
                <option value=""></option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </>
          ) : (
            <small>감정 점수: {rating}</small>
          )}
        </div>

        <h4>{new Date(createdAt).toLocaleString()}</h4>
      </div>
      <div className={styles.content}>
        {isEdit ? (
          <>
            <textarea
              name="content"
              onChange={handleContentChange}
              value={localContent}
            />
          </>
        ) : (
          content
        )}
      </div>
    </div>
  );
};
