import React from "react";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { db } from "../firebase";

const OAuth = () => {
  const navigate = useNavigate();

  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await handleUser(result.user);
    } catch (error) {
      toast.error("Could not authorize with Google");
    }

    async function handleUser(user) {
      //check if user already exists
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    }
  }
  return (
    <>
      <button
        type="button"
        onClick={onGoogleClick}
        className="mb-3 flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
      >
        <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
        Continue with Google
      </button>
    </>
  );
};

export default OAuth;
