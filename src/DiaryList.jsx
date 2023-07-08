import { DiaryItem } from './DiaryItem';
import styles from './DiaryList.module.css';

export const DiaryList = ({ entries, deleteEntry }) => {
  return (
    <section className={styles.DiaryList}>
      <h2>일기장 리스트</h2>
      <h4>{entries.length}개의 일기가 있습니다</h4>
      {entries.map((entry) => (
        <DiaryItem key={entry.id} {...entry} deleteEntry={deleteEntry} />
      ))}
    </section>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};
