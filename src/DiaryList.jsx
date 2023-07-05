export const DiaryList = ({ entries }) => {
  console.log(entries);
  return (
    <section className="DiaryList">
      <h1>일기장 리스트</h1>
      <h4>{entries.length}개의 일기가 있습니다</h4>
      {entries.map((entry) => (
        <div key={entry.id}>
          <h3>작성자: {entry.author}</h3>
          <p>{entry.content}</p>
        </div>
      ))}
    </section>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};
