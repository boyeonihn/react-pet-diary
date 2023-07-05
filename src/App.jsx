import { useState } from 'react';
import { DiaryEditor } from './DiaryEditor';

function App() {
  const [diaryList, setDiaryList] = useState([]);

  const addEntryToList = (entry) => {
    setDiaryList((currentList) => [...currentList, entry]);
  };

  return (
    <div>
      <DiaryEditor addEntryToList={addEntryToList} />
    </div>
  );
}

export default App;
