import { connect, disconnect } from "mongoose";
async function connectDB() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not connect to MongoDb.");
    }
}
async function disconnectDB() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not able to disconnect MongoDb.");
    }
}
export { connectDB, disconnect };
//# sourceMappingURL=connection.js.map