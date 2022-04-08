import React, { Component, useState } from "react";
import { firestore } from "./firebase";
import { useEffect } from 'react';

function Ui () {

    const [inputs, setInputs] = useState({
        text:'',
        korean:'',
        english:'',
        detail:'',
    });

    const { text, korean,english, detail } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onClickHandler = (e) => {
        // word이라는 변수로 firestore의 collection인 word에 접근
        const word = firestore.collection("word");
    
        // word 콜렉션의 korean으로 문자를받아 id생성, { 내용:detail , 영어: english} 데이터 추가.
        // 새로 만들거나 덮어쓰기
        word.doc(korean).set({ 내용:detail , 영어: english});
    }




    // console.log(text)
    //  console.log(korean)
    // console.log(english)
    // console.log(detail)

    return (
      <div>
        <input name="text" placeholder="검색어" onChange={onChange} value={text} />
        <br/>
        <input name="korean" placeholder="한글" onChange={onChange} value={korean} />
        <input name="english" placeholder="영어" onChange={onChange} value={english} />
        <input name="detail" placeholder="내용" onChange={onChange} value={detail} />
        <button onClick={onClickHandler}>등록</button>
      </div>
    );
  }

 
export default Ui;