//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCESu--7C9zA5KtUfK85Fvq9QgRa6IvTLM",
    authDomain: "noname-b9b4d.firebaseapp.com",
    projectId: "noname-b9b4d",
    storageBucket: "noname-b9b4d.appspot.com",
    messagingSenderId: "499211469443",
    appId: "1:499211469443:web:cfdbc3bb726c3a5c8e91b6",
    measurementId: "G-9CLQPPPG6G"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };