import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { connect } from "react-redux";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import  {UpdateLoader}  from "../Redux/Action";

function mapStateToProps(state) {
  return {
    getLoader: state.getLoader,
  };
}
const Welcome = (props) => {
  const {dispatch,getLoader}= props
  const googleSignIn = () => {
    dispatch(UpdateLoader(true));
    // setLoaders(true)
    const provider = new GoogleAuthProvider();
    // if (provider) {
    //   setLoader(false)
    // }
    signInWithRedirect(auth, provider);

  };

  return (
    <>
      {/* {getLoader &&<ActivityIndicator/>} */}
    <main className="welcome">
        <div>{getLoader}</div>
      <h2>Welcome to React Chat.</h2>
      <h2>{process.env.REACT_APP_API_KEY}</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          // type="button"
        />
      </button>
      </main>
      </>
  );
};
export default connect(mapStateToProps)(Welcome);