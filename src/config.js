export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "note-app-uploads-diego-berrios"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://pjkc3qp386.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_AN8Ipwi1i",
      APP_CLIENT_ID: "5ukcqe3268hkmb9gdktv9lip99",
      IDENTITY_POOL_ID: "us-east-1:03075920-059f-449f-9eec-3b434f004cbd"
    }
  };
  