import styles from './DiaryItem.module.css';
export const DiaryItem = ({
  author,
  content,
  rating,
  id,
  createdAt,
  deleteEntry,
}) => {
  return (
    <div className={styles.DiaryItem}>
      <div className={styles.info}>
        <h3>작성자: {author}</h3>
        <small>감정 점수: {rating}</small>
        <h4>{new Date(createdAt).toLocaleString()}</h4>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};
