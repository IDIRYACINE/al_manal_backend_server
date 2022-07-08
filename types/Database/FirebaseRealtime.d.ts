import { Database } from 'firebase-admin/lib/database/database';
export declare function postData(path: string, data: any): Promise<void>;
export declare function readData(path: string): Promise<any>;
export declare function setUpFirebaseDatabase(database: Database): Promise<void>;
