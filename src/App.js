import logo from './logo.svg';
import './App.css';
import { firestore } from "./firebase";
import { useEffect } from 'react';

function App() {

  // 연동 확인
      useEffect(() => {
        console.log(firestore);
      });

      useEffect(() => {
        // word이라는 변수로 firestore의 collection인 word에 접근
        const word = firestore.collection("word");

        // collection의 document인 "word_item"을 가져온다.
        word.doc("higsFKwBDqAnYUrFN9M1").get().then((doc) => {

          // document의 데이터를 가져옴
          console.log(doc.data());
          // document의 id를 가져옴
          console.log(doc.id);
        });
      });
      
  return (
    <div className="App">
      firebase 확인해보기!
    </div>
  );
}

export default App;
