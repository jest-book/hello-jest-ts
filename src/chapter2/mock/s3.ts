import * as AWS from '@aws-sdk/client-s3'

// v2API を利用しています。
const s3Client = new AWS.S3({ apiVersion: '2006-03-01' })

export const uploadJsonListToS3 = ({ jsonList, s3BucketName, path = '/' }) => {
  const requests = jsonList.map(json => {
    return s3Client.putObject({
      Bucket: s3BucketName,
      Key: `${path}${json.s3Key}`,
      Body: json, // 本来であればstring型にする必要があります。
      ContentType: 'application/json; charset=utf-8',
      CacheControl: 'max-age=60',
    })
  })
  return Promise.all(requests)
}

// 以下は型を定義したバージョン
// type uploadJsonListToS3Props = {
//   jsonList: { s3Key: string, keyword: string, mentions: {}[] }[]
//   s3Client: AWS.S3;
//   s3BucketName: string;
//   path?: string;
// }

// export const uploadJsonListToS3 = ({
//   jsonList,
//   s3Client,
//   s3BucketName,
//   path = '/',
// }: uploadJsonListToS3Props) => {
//   const requests = jsonList.map(json => {
//     return s3Client.putObject({
//       Bucket: s3BucketName,
//       Key: `${path}${json.s3Key}`,
//       Body: JSON.stringify(json),
//       ContentType: 'application/json; charset=utf-8',
//       CacheControl: 'max-age=60',
//     })
//   })
//   return Promise.all(requests)
// }
