//connexionDB.js

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const { URL } = process.env;

export class ConnexionDB {
    constructor() {
        this.connexionDb = null;
    }

    generateConnexion = async () => {
        try {
            this.connexionDb = await mongoose.connect(URL);
            console.log("DataBase Connected");
        } catch (error) {
            console.error("error");
            this.connexionDb = null;
        }
    };

    getConnexion() {
        if (!this.connexionDb) this.generateConnexion();
        return this.connexionDb;
    }
}
