import admin from 'firebase-admin';

import StorageService from './Storage/StorageService';
import {Emulator} from './Config'
import { setUpFirebaseDatabase } from './Database/FirebaseRealtime';
import { setUpProductsDatabase } from './Database/ProductsDatabase';

function App(isTestMode:boolean){   
        let databaseUrl;
        if (isTestMode){
                databaseUrl = "http://192.168.1.6:9000/?ns=online-order-client";
                process.env[Emulator.authEnvKey] = Emulator.auth
                process.env[Emulator.databaseEnvKey] = Emulator.database
                process.env[Emulator.storageEnvKey] = Emulator.storage
                process.env[Emulator.firestoreEnvKey] = Emulator.firestore
        }
        else{
             databaseUrl = "https://online-order-client-default-rtdb.europe-west1.firebasedatabase.app";
        }

        admin.initializeApp({credential : admin.credential.cert('./servicesAccount.json'),
        databaseURL : databaseUrl,
        storageBucket:"online-order-client.appspot.com"
})
        
        
        setUpFirebaseDatabase(admin.database()); 
        StorageService(admin.storage())
        setUpProductsDatabase()
       
  
}

export default App ;
