
    export const ProductsDatabaseConfig = {
        databaseName : "Products.db",
        databaseUrl : "./data",
        categoryTableName : "Categories",
    }

    export const CustomersDatabaseConfig = {
        databaseName : "Customers.db",
        databaseUrl : "./data",
        mainTable : "Customers",
        mainTableAttrbs : ["PhoneNumber","BanStatus"],
        secondaryTable : "Extras",
        secondaryTableAttrbs : ["Rating","NegativeRating","Latitude","Longitude"]
    }

    export const Emulator = {
        firestore: "192.168.1.6:8080" ,
        firestoreEnvKey :"FIRESTORE_EMULATOR_HOST",
        database:"192.168.1.6:9000",
        databaseEnvKey :"FIREBASE_DATABASE_EMULATOR_HOST",
        auth:"192.168.1.6:9099",
        authEnvKey :"FIREBASE_AUTH_EMULATOR_HOST",
        storage : "192.168.1.6:9199",
        storageEnvKey :"FIREBASE_STORAGE_EMULATOR_HOST"
    }
    const apiVersion = "v1";
    export const Api = {
        createCategory : `/${apiVersion}/CreateCategory`,
        updateCategory : `/${apiVersion}/UpdateCategory`,
        fetchCategory : `/${apiVersion}/FetchCategory`,
        deleteCategory : `/${apiVersion}/DeleteCategory`,
        createProduct : `/${apiVersion}/CreateProduct`,
        updateProduct : `/${apiVersion}/UpdateProduct`,
        fetchProduct : `/${apiVersion}/FetchProduct`,
        deleteProduct : `/${apiVersion}/DeleteProduct`,
        synchroniseDatabase : `/${apiVersion}/SynchroniseDatabase`,
        resetDatabase : `/${apiVersion}/ResetDatabase`,

       
        
    }