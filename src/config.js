const dev = {
  STRIPE_KEY: "sk_test_ukGTNEnl3lmLAB6RkPBuT1fA",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-16tsiqu40ur1k"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://sas78z2q8c.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7hLjLceh4",
    APP_CLIENT_ID: "1tbvm30f7ln0j1n3k4vovmd84j",
    IDENTITY_POOL_ID: "us-east-1:4c4dc813-ebda-4cfb-b779-981db18073ec"
  }
};

const prod = {
  STRIPE_KEY: "sk_test_ukGTNEnl3lmLAB6RkPBuT1fA",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1dft0qj6dgrxo"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://rn11c8zi0a.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_W6rrklgrh",
    APP_CLIENT_ID: "1tbvm30f7ln0j1n3k4vovmd84j",
    IDENTITY_POOL_ID: "us-east-1:21ad7573-cb6b-4f0a-9540-7fe44a7fd679"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
