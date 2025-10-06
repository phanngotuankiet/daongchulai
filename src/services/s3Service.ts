import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// S3 Configuration
const s3Client = new S3Client({
  region: process.env.VITE_AWS_REGION || 'ap-southeast-2',
  credentials: {
    accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  },
});

const BUCKET_NAME = process.env.VITE_AWS_S3_BUCKET_NAME || 'daong';

// Generate presigned URL for upload
export const generateUploadUrl = async (fileName: string, fileType: string) => {
  const key = `posts/${Date.now()}-${fileName}`;
  
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    ContentType: fileType,
    ACL: 'public-read',
  });

  const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  
  return {
    uploadUrl: signedUrl,
    fileUrl: `https://${BUCKET_NAME}.s3.${process.env.VITE_AWS_REGION || 'ap-southeast-2'}.amazonaws.com/${key}`,
    key: key
  };
};

// Delete file from S3
export const deleteFile = async (key: string) => {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  await s3Client.send(command);
};

// Extract S3 key from URL
export const extractS3Key = (url: string): string | null => {
  const match = url.match(/https:\/\/[^\/]+\.s3\.[^\/]+\.amazonaws\.com\/(.+)/);
  return match ? match[1] : null;
};
