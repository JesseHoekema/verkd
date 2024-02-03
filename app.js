import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
        import { getFirestore, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js';
        
        // Configuratie van Firebase
        const firebaseConfig = {
            apiKey: 'AIzaSyCAqvXUSvArNuEkJ_hYO0KP_RYk6kbONMU',
            authDomain: 'AIzaSyCAqvXUSvArNuEkJ_hYO0KP_RYk6kbONMU',
            projectId: 'jessehoekema-cdn',
            storageBucket: 'jessehoekema-cdn.appspot.com',
            messagingSenderId: '354058046477',
            appId: '1:354058046477:web:590d21e934b16ec4481944'
        };

        // Initialisatie van Firebase
        const firebaseApp = initializeApp(firebaseConfig);

        // Referentie naar de Firestore-database
        const db = getFirestore(firebaseApp);

        // Documentreferentie voor de teller
        const counterRef = doc(db, 'counters', 'loadCounter');

        // Verhoog de teller met één
        getDoc(counterRef).then(docSnap => {
            let counter = docSnap.exists() ? docSnap.data().value : 0;
            counter++;
            return setDoc(counterRef, { value: counter });
        }).then(() => {
            // Toon de tellerwaarde op de pagina
            document.write('<p>This page has been loaded ' + counter + ' times.</p>');
        }).catch(error => {
            console.error('Error updating counter:', error);
        });
