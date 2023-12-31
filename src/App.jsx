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

  const editEntry = (targetEntry, entryId) => {
    setDiaryList(
      diaryList.map((entry) =>
        entry.id === entryId
          ? {
              ...entry,
              ...targetEntry,
            }
          : entry
      )
    );
  };

  return (
    <div>
      <DiaryEditor addEntryToList={addEntryToList} />
      <DiaryList
        entries={diaryList}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />
    </div>
  );
}

export default App;
