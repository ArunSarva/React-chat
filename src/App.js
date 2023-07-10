import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import React, { useEffect } from "react";
import { UpdateLoader } from "./Redux/Action";
import  ActivityIndicator  from "./components/activityIndicator/index"
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    getLoader: state.getLoader,
  };
}
function App(props) {
  const {dispatch,getLoader} = props ;
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      dispatch(UpdateLoader(false));
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[user])
  return (
    <div className="App" style={{ }}>
      {getLoader &&<ActivityIndicator/>}
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
          <div className="Chatlayout">
            
          <ChatBox />
        </div>
      )}
    </div>
  );
}

export default connect(mapStateToProps)(App);