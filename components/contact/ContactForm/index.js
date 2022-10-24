import * as S from "./style";
import { useState } from "react";
import useInput from "../../../hooks/use-input";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useRouter } from "next/router";
import pl from "../../../locales/pl";
import en from "../../../locales/en";
import { motion } from "framer-motion";

const ContactForm = (props) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : pl;

  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useRef();

  const isNotEmpty = (value) => value.trim() !== "";
  const isNumber = (value) => value.length === 9 && value.match(/^[0-9]+$/);
  const isEmail = (value) => value.includes("@") && value.includes(".");

  let formIsValid = false;

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    inputFocusHandler: nameFocusHandler,
    inputState: nameInputState,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredText,
    isValid: enteredTextIsValid,
    hasError: textHasError,
    valueChangeHandler: textChangeHandler,
    inputBlurHandler: textBlurHandler,
    inputFocusHandler: textFocusHandler,
    inputState: textInputState,
    reset: resetPhoneInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputFocusHandler: emailFocusHandler,
    inputState: emailInputState,
    reset: resetEmailInput,
  } = useInput(isEmail);

  if (enteredNameIsValid && enteredEmailIsValid && enteredTextIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "",
        "",
        form.current,
        ""
      )
      .then(
        (result) => {
          resetNameInput();
          resetEmailInput();
          resetPhoneInput();

          setIsSend(true);

          setTimeout(() => {
            setIsSend(false);
          }, 10000);
        },
        (error) => {
          setIsError(true);

          setTimeout(() => {
            setIsError(false);
          }, 10000);
        }
      );
  };

  return (
    <S.CenterForm>
      <S.Form
        as={motion.form}
        initial={{ y: -15, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          type: "linear",
        }}
        ref={form}
        onSubmit={formIsValid ? formSubmissionHandler : null}
      >
        <S.SingleFormWrapper
          className={nameInputState.isOnFocus && "focus"}
          hasError={nameInputHasError}
          isValid={enteredNameIsValid}
        >
          <S.Label
            hasError={nameInputHasError}
            isValid={enteredNameIsValid}
            htmlFor="name"
            className={
              (nameInputState.value !== "" && "focus") ||
              (nameInputState.isOnFocus && "focus")
            }
          >
            {t.commons.contactForm.name}
          </S.Label>
          <S.Input
            id="name"
            type="text"
            name="name"
            required
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            onFocus={nameFocusHandler}
            value={enteredName}
            hasError={nameInputHasError}
            isValid={enteredNameIsValid}
            className={
              (nameInputState.value !== "" && "focus") ||
              (nameInputState.isOnFocus && "focus")
            }
          />
          {nameInputHasError && (
            <S.ErrorText>{t.commons.contactForm.fieldRequired}</S.ErrorText>
          )}
        </S.SingleFormWrapper>

        <S.SingleFormWrapper
          className={emailInputState.isOnFocus && "focus"}
          hasError={emailInputHasError}
          isValid={enteredEmailIsValid}
        >
          <S.Label
            hasError={emailInputHasError}
            isValid={enteredEmailIsValid}
            htmlFor="email"
            className={
              (emailInputState.value !== "" && "focus") ||
              (emailInputState.isOnFocus && "focus")
            }
          >
            {t.commons.contactForm.email}
          </S.Label>
          <S.Input
            id="email"
            type="text"
            name="email"
            required
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            onFocus={emailFocusHandler}
            value={enteredEmail}
            hasError={emailInputHasError}
          />
          {emailInputHasError && (
            <S.ErrorText>{t.commons.contactForm.enterValidEmail}</S.ErrorText>
          )}
        </S.SingleFormWrapper>

        <S.FullFormWrapper
          className={textInputState.isOnFocus && "focus"}
          hasError={textHasError}
          isValid={enteredTextIsValid}
        >
          <S.Label
            hasError={textHasError}
            isValid={enteredTextIsValid}
            htmlFor="your-message"
            className={
              (textInputState.value !== "" && "focus") ||
              (textInputState.isOnFocus && "focus")
            }
          >
            {t.commons.contactForm.message}
          </S.Label>

          <S.Textarea
            id="your-message"
            type="text"
            name="your-message"
            required
            onChange={textChangeHandler}
            onBlur={textBlurHandler}
            onFocus={textFocusHandler}
            value={enteredText}
            hasError={textHasError}
            className={
              (textInputState.value !== "" && "focus") ||
              (textInputState.isOnFocus && "focus")
            }
          />
          {textHasError && (
            <S.ErrorText>
              {t.commons.contactForm.fillInTheTextField}
            </S.ErrorText>
          )}
        </S.FullFormWrapper>

        <S.btnWrapper>
          <S.Btn disabled={!formIsValid}>
            <span>{t.commons.contactForm.submit}</span>
          </S.Btn>
        </S.btnWrapper>

        {isSend && (
          <S.ThankYouMessage>
            {t.commons.contactForm.thankYouMessage}
          </S.ThankYouMessage>
        )}

        {isError && (
          <S.ErrorMessage>{t.commons.contactForm.errorMessage}</S.ErrorMessage>
        )}
      </S.Form>
    </S.CenterForm>
  );
};

export default ContactForm;
