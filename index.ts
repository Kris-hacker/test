import express, { Express, Request, response, Response } from 'express';
import dotenv from 'dotenv';
import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Set the AWS Region.
const REGION = "us-west-2"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const client = new DynamoDBClient({ region: REGION });

// Set the parameters
// export const params = {
//   TableName: "ednsTable", //TABLE_NAME
//   Key: {
//     key: { S: "status" },
//   }
// };

export const run = async () => {
  const data = await client.send(new GetItemCommand({
    TableName: "edns-status-table", 
    Key: {
      key: { S: "status" },
    }
  }));
  console.log("Success", data.Item);
  return data;
};

app.get('/status', async(req: Request, res: Response) => {
  // res.send('Express + TypeScript Server1css11');
  const result = await run();
  //console.log(JSON.stringify({rex: result.Item}, null, 2))
  return res.json({status: !!result.Item?.value['BOOL']})
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

