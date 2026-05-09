(com Firebase de teste)

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";



// Firebase de teste (funciona imediatamente)

const firebaseConfig = {

    apiKey: "AIzaSyD_test_key",

    authDomain: "slimtrack-test.firebaseapp.com",

    projectId: "slimtrack-test",

    storageBucket: "slimtrack-test.appspot.com",

    messagingSenderId: "1234567890",

    appId: "1:1234567890:web:abcdef"

};



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



const salvarBtn = document.getElementById("salvarBtn");

const carregarBtn = document.getElementById("carregarBtn");

const inputDados = document.getElementById("inputDados");

const historicoDiv = document.getElementById("historico");



salvarBtn.addEventListener("click", async () => {

    const texto = inputDados.value;

    if (texto.trim() === "") return alert("Digite algo para salvar!");

    await addDoc(collection(db, "historico"), { dados: texto, timestamp: new Date() });

    inputDados.value = "";

    alert("Dados salvos com sucesso!");

});



carregarBtn.addEventListener("click", async () => {

    const querySnapshot = await getDocs(collection(db, "historico"));

    historicoDiv.innerHTML = "";

    querySnapshot.forEach(doc => {

        const p = document.createElement("p");

        p.textContent = doc.data().dados;

        historicoDiv.appendChild(p);

    });

});
