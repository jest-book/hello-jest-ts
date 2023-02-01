import { uploadJsonListToS3 } from './s3'

jest.mock('@aws-sdk/client-s3')

describe('#uploadJsonListToS3', () => {
  it('upload one json to s3', async () => {
    const params = {
      jsonList: [
        {
          keyword: 'jest',
          mentions: [{}],
          s3Key: '2022-09-01',
        },
      ],
      s3BucketName: 'bucket',
    }

    await expect(uploadJsonListToS3(params)).resolves.toEqual([undefined])
  })
})
