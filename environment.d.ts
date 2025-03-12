declare namespace NodeJS {
  export interface ProcessEnv {
    readonly FIREBASE_API_KEY: string;
    readonly NEXT_PUBLIC_FIREBASE_API_KEY: string;
    readonly FIREBASE_AUTH_DOMAIN: string;
    readonly NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    readonly FIREBASE_PROJECT_ID: string;
    readonly NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
    readonly FIREBASE_STORAGE_BUCKET: string;
    readonly NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
    readonly FIREBASE_MESSAGING_SENDER_ID: string;
    readonly NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
    readonly FIREBASE_APP_ID: string;
    readonly NEXT_PUBLIC_FIREBASE_APP_ID: string;
    readonly FIREBASE_MEASUREMENT_ID: string;
    readonly NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
  }
}
