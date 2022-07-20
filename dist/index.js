"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
/*
export const run = async () => {
  const data = await client.send(new GetItemCommand(params));
  console.log("Success", data.Item);
  return data;
};
*/
// Set the AWS Region.
//const REGION = "us-west-2"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
//const client = new DynamoDBClient({ region: REGION });
// Set the parameters
/*
export const params = {
  TableName: "ednsTable", //TABLE_NAME
  Key: {
    key: { N: "status" },
  }
};
*/
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    console.log("jsnc");
    res.send('Return Data : ');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
