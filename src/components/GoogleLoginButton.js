import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom"; // For redirecting after login

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      // Send the Google credential to your backend for verification
      const res = await fetch(
        "http://localhost:5000/users/auth/google/callback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: credentialResponse.credential }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log("Login Success:", data);

        // Save the token to localStorage or context
        localStorage.setItem("token", data.token);

        // Redirect to the home page or dashboard
        navigate("/profile");
      } else {
        console.error("Login Failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="263101632050-5htn20jeisioatoajvdvv0ahvmr1ha35.apps.googleusercontent.com">
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
