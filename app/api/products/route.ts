import { NextResponse, NextRequest } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// const s3Client = new S3Client({
//     region: process.env.NEXT_PUBLIC_AWS_S3_REGION!,
//     credentials: {
//         accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
//         secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
//     },
// });

// const params = {
//     Bucket: "taharka",
// };

export async function GET(request: NextRequest) {
    try {
        NextResponse.next();
    } catch (error) {
        return NextResponse.json({ error: "Error Retreiving Menu Items" });
    }
}
