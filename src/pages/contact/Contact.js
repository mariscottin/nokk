import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReactLoading from "react-loading";
import EmptyNavigation from "../../components/EmptyNavigation";
import Success from "../../assets/success-logo.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const [noName, setNoName] = useState(false);
  const [noEmail, setNoEmail] = useState(false);
  const [noMessage, setNoMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_bfwmk6c",
          "template_63wwcg7",
          e.target,
          "user_szIqW3CKeVgC4vGH8Aske"
        )
        .then(
          (result) => {
            setLoading(false);
            setMessageSent(true);
            setName();
            setEmail();
            setMessage();
            setPhone();
            console.log(result.text);
          },
          (error) => {
            setLoading(false);
            alert(
              "Hubo un error enviando el mensaje. Por favor, intente nuevamente más tarde."
            );
            console.log(error.text);
          }
        );
    } else {
      if (!name) {
        setNoName(true);
      }
      if (!email) {
        setNoEmail(true);
      }
      if (!message) {
        setNoMessage(true);
      }
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNoName(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setNoEmail(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setNoMessage(false);
  };

  return (
    <div className="contact">
      <EmptyNavigation />
      <div className="contact__container">
        <div className="contact__containerLeft"></div>
        <div className="contact__containerRight">
          {!messageSent && (
            <>
              <div className="contact__title">
                <h2>Construí Nokk</h2>
                <h4>Dejanos tu consulta a continuación</h4>
              </div>
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__formTop">
                  <div className="contact__formGroup">
                    <label htmlFor="formEmail">Mail*</label>
                    <input
                      type="email"
                      className={`contact__formInput contact__formSmallInput ${
                        noEmail && "contact__redBorder"
                      }`}
                      id="formEmail"
                      name="from_email"
                      onChange={(e) => handleEmailChange(e)}
                    />
                    {noEmail && (
                      <small className="contact__missingInput">
                        Por favor, completar su email
                      </small>
                    )}
                  </div>
                  <div className="contact__formGroup">
                    <label htmlFor="formName">Nombre*</label>
                    <input
                      type="text"
                      className={`contact__formInput contact__formSmallInput ${
                        noName && "contact__redBorder"
                      }`}
                      id="formName"
                      name="from_name"
                      onChange={(e) => handleNameChange(e)}
                    />
                    {noName && (
                      <small className="contact__missingInput">
                        Por favor, completar su nombre
                      </small>
                    )}
                  </div>
                  <div className="contact__formGroup">
                    <label htmlFor="formPhone">Teléfono</label>
                    <PhoneInput
                      value={phone}
                      onChange={setPhone}
                      defaultCountry="AR"
                      className="contact__formInput contact__formSmallInput"
                      id="formPhone"
                      name="from_phone"
                    />
                    {/* <input
                      type="number"
                      className="contact__formInput contact__formSmallInput"
                      id="formPhone"
                      name="from_phone"
                    /> */}
                  </div>
                  <div className="contact__formGroup contact__textareaGroup">
                    <label htmlFor="formBody">Tu Consulta*</label>
                    <textarea
                      className={`contact__formInput ${
                        noMessage && "contact__redBorder"
                      }`}
                      id="formBody"
                      name="message"
                      onChange={(e) => handleMessageChange(e)}
                    ></textarea>
                    {noMessage && (
                      <small className="contact__missingInput">
                        Por favor, completar la consulta
                      </small>
                    )}

                    <small>(*) Campos Obligatorios</small>
                  </div>
                </div>
                <div className="contact__bottom">
                  {!isLoading && (
                    <>
                      <button
                        type="submit"
                        className="button button__black contact__formSubmit"
                      >
                        Enviar
                      </button>
                      <p>
                        O mandanos un mail a{" "}
                        <a href="mailto:info@nokk.com.ar">info@nokk.com.ar</a>{" "}
                      </p>
                    </>
                  )}
                  {isLoading && (
                    <ReactLoading
                      type="spinningBubbles"
                      color="#000000"
                      height={60}
                      width={60}
                      className="loading-spinner"
                    />
                  )}
                </div>
              </form>
            </>
          )}
          {messageSent && (
            <div className="contact__messageSent">
              <h1>¡Su consulta ha sido enviada con éxito!</h1>
              <h3>Le contestaremos a la brevedad</h3>
              <img src={Success} alt="success" />
              <p onClick={() => setMessageSent(false)}>Enviar otro mensaje</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
