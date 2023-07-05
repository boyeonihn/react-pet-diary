import { useState } from 'react';
import { DiaryEditor } from './DiaryEditor';
import { DiaryList } from './DiaryList';

function App() {
  const [diaryList, setDiaryList] = useState([]);

  const addEntryToList = (entry) => {
    setDiaryList((currentList) => [...currentList, entry]);
  };

  return (
    <div>
      <DiaryEditor addEntryToList={addEntryToList} />
      <DiaryList entries={diaryList} />
    </div>
  );
}

export default App;
