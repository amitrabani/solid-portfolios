import React, { useState, useEffect, useRef } from "react";
import { Container } from "../Modal/modalStyles";
import SignInFormContainer from "../../user/SignInForm/SignInFormContainer";
import { signUpWithGoogle } from "../../../redux/actions/auth/authActionCreators";
import { compose } from "recompose";
import { connect } from "react-redux";
import SignUpFormContainer from "../../user/SignUp/SignUpFormContainer";

const Modal = props => {
  const RENDER_SIGNIN = "signIn";
  const RENDER_SIGNUP = "SignUp";
  const RENDER_FORGOT = "forgotPassword";

  const [isComponentVisible, setIsComponentVisible] = useState(props.isOpen);
  const [renderedForm, setrenderedForm] = useState(RENDER_SIGNIN);

  const ref = useRef(null);
  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      props.onClose();
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      props.onClose();
      setIsComponentVisible(false);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.signInGoogle();
  };

  const switchForm = form => {
    setrenderedForm(form);
  };
  useEffect(() => {
    setIsComponentVisible(props.isOpen);
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [props.isOpen]);

  return (
    <>
      {isComponentVisible && (
        <Container ref={ref}>
          {renderedForm === RENDER_SIGNIN && (
            <>
              <button onClick={handleSubmit}>Sign In with Google</button>
              <SignInFormContainer firebase={props.authUser} />
              <a onClick={() => switchForm(RENDER_SIGNUP)}>Sign Up Instead</a>
            </>
          )}
          {renderedForm === RENDER_SIGNUP && (
            <>
              <SignUpFormContainer />
              <a onClick={() => switchForm(RENDER_SIGNIN)}>Sign In Instead</a>
            </>
          )}

          {/* {renderedForm === RENDER_FORGOT && (
            <>
              <SignUpFormContainer />
              <a onClick={() => switchForm(RENDER_SIGNIN)}>Sign In Instead</a>
            </>
          )} */}
        </Container>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  // authUser: state.sessionState.authUser
});

const mapDispatchToProps = dispatch => {
  return {
    signInGoogle: () => dispatch(signUpWithGoogle())
  };
};

// const condition = authUser => !!authUser;
export default compose(
  connect(mapStateToProps, mapDispatchToProps)
  // withEmailVerification,
  // withAuthorization(condition),
)(Modal);

// export default Modal;
