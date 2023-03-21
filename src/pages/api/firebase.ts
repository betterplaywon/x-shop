import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from "firebase/auth";

import { getDatabase, ref, set, get } from "firebase/database";
import { v4 as uuid } from "uuid";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getDatabase(app);

provider.setCustomParameters({
  prompt: "select_account",
});

// export const signIn = async () => {
//   return signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const user = result.user;

//       return user;
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.customData.email;
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       console.log(error);
//       // ...
//     });
// };

// export const signOutFunc = async () => {
//   return signOut(auth)
//     .then(() => {
//       return undefined;
//     })
//     .catch((error: any) => {
//       console.log(error);
//     });
// };

export const signIn = (): void => {
  signInWithPopup(auth, provider).catch(error => {
    console.log(error);
  });
};

export const signOutFunc = (): void => {
  signOut(auth).catch(error => {
    console.log(error);
  });
};

const isAdmin = async (user: { uid: string }) => {
  return get(ref(db, "admin")).then(snapshot => {
    if (snapshot.exists()) {
      const admin = snapshot.val();

      const includeAdminUid = admin.indexOf(user?.uid) > -1;
      return { ...user, includeAdminUid };
    }
    return user;
  });
};

export const maintainUserData = callbackFunc => {
  onAuthStateChanged(auth, async user => {
    // 유저 없는 경우는 null로 빠지도록 분기처리 필요
    const checkAdmin = user ? await isAdmin(user) : null;
    callbackFunc(checkAdmin);
  });
};

export const addNewProduct = (product, imageURL) => {
  const id = uuid();
  return set(ref(db, `product/${id}`), {
    ...product,
    id: id,
    price: parseInt(product.price),
    image: imageURL,
    options: product.options.split(","),
  });
};

export const getProduct = () => {
  return get(ref(db, "product")).then(snapshot => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
};
