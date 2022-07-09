import { ProductsDatabaseConfig } from "../Config";
import { postData, readData } from "../Database/FirebaseRealtime";
import { resetProductDatabase } from "../Database/ProductsDatabase";
import { UploadFile } from "../Storage/StorageService";


const databasePath = ProductsDatabaseConfig.databaseUrl+'/'+ProductsDatabaseConfig.databaseName;


export async function synchroniseDatabase(onSuccess:()=>void , onFail:()=>void){
    const versionPath = "version";

    readData(versionPath).then(version => {
        UploadFile(databasePath).then(()=>{
            postData(versionPath,version+1).then((
                onSuccess
            ))
        })
      
    })
    .catch(onFail);
     
}


export async function resetDatabase(onSuccess:()=>void , onFail:()=>void){
    const versionPath = "version";
    resetProductDatabase().then(()=>{
        UploadFile(databasePath).then(()=>{
            postData(versionPath,0).then(onSuccess).catch(onFail);
    });
   
    }).catch(onFail);

}