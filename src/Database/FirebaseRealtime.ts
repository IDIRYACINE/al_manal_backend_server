
import { Database } from 'firebase-admin/lib/database/database';


let firebaseRealTime : Database


export async function postData(path:string,data:any){
  
    await firebaseRealTime.ref(path).set(data )
      
}

export async function readData(path:string){

    const data = await firebaseRealTime.ref(path).get();

    return data.val();
    
        
}

export async function setUpFirebaseDatabase(database :Database) {
    firebaseRealTime = database
   
   
}

