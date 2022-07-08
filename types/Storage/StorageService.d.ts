import { Storage } from "firebase-admin/lib/storage/storage";
export declare function UploadFile(fileUrl: string): Promise<void>;
export declare function DonwloadFile(downloadUrl: string): Promise<void>;
export default function StorageService(storage: Storage): void;
