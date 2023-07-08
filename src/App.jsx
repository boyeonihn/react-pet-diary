import { useState } from 'react';
import { DiaryEditor } from './DiaryEditor';
import { DiaryList } from './DiaryList';

function App() {
  const [diaryList, setDiaryList] = useState([]);

  const addEntryToList = (entry) => {
    setDiaryList([...diaryList, entry]);
  };

  const deleteEntry = (entryId) => {
    setDiaryList(diaryList.filter((entry) => entry.id !== entryId));
  };

  return (
    <div>
      <DiaryEditor addEntryToList={addEntryToList} />
      <DiaryList entries={diaryList} deleteEntry={deleteEntry} />
    </div>
  );
}

export default App;
