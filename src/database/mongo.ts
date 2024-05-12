import { connect } from "mongoose";

export async function connectMongo() {
  await connect(
    //"mongodb+srv://root:1234@cluster0.ohz7guz.mongodb.net/?retryWrites=true&w=majority"
      "mongodb+srv://lucasbianchideassis:Ks9pMfZhxxxSoSAA@cluster0.bkixiq4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}
