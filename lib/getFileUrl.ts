// import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
// import { awsConfig } from "../awsConfig";

// const s3Client = new S3Client(awsConfig);

// export interface GetFileUrlResponse {
//     fileUrl: string | null;
//     fileData?: any;
// }

// async function getFileUrl(bucket: string, key: string): Promise<GetFileUrlResponse> {
//     try {
//         const command = new GetObjectCommand({
//             Bucket: "taharka",
//             Key: key,
//         });

//         const { $metadata, ...data } = await s3Client.send(command);

//         // Use the `data.Body` or other properties as needed
//         console.log("File data:", data);

//         // Get the URL to access the file
//         const fileUrl = `https://${bucket}.s3.amazonaws.com/${key}`;

//         return { fileUrl, fileData: data };
//     } catch (error) {
//         console.error("Error fetching file:", error);
//         return { fileUrl: null };
//     }
// }

// export default getFileUrl;
