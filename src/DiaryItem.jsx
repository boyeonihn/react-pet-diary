import styles from './DiaryItem.module.css';
export const DiaryItem = ({
  author,
  content,
  rating,
  id,
  createdAt,
  deleteEntry,
  editEntry,
}) => {
  const onEdit = (event) => {
    const id = event.target.className;
    const entry = {
      content: localContent,
      rating: localRating,
    };
    editEntry(entry, id);
  };

  return (
    <div className={styles.DiaryItem}>
      <button className={id} onClick={onEdit}>
        {isEdit ? '저장하기' : '수정하기'}
      </button>
      <div className={styles.info}>
        <button
          className={id}
          onClick={(e) => {
            const id = e.target.className;
            deleteEntry(id);
          }}
        >
          삭제하기
        </button>
        <h3>작성자: {author}</h3>
        <small>감정 점수: {rating}</small>
        <h4>{new Date(createdAt).toLocaleString()}</h4>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};
