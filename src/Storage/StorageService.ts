import {Storage } from "firebase-admin/lib/storage/storage";

let cloudStorage : Storage

export async function UploadFile(fileUrl : string){
    cloudStorage.bucket().upload(fileUrl)
}

export async function DonwloadFile(downloadUrl : string){
       
}




export default function StorageService(storage : Storage ){
    cloudStorage = storage
}
