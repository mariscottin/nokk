import React from "react";
import EmptyNavigation from "../../components/EmptyNavigation";
import "./Contact.css";
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
  };

  return (
    <div className="contact">
      <EmptyNavigation />
      <div className="contact__container">
        <div className="contact__containerLeft"></div>
        <div className="contact__containerRight">
          <div className="contact__title">
            <h2>Construí Nokk</h2>
            <h4>Dejanos tu consulta a continuación</h4>
          </div>
          <form className="contact__form">
            <div className="contact__formTop">
              <div className="contact__formGroup">
                <label htmlFor="formEmail">Mail</label>
                <input
                  type="email"
                  className="contact__formInput contact__formSmallInput"
                  id="formEmail"
                />
              </div>
              <div className="contact__formGroup">
                <label htmlFor="formName">Nombre</label>
                <input
                  type="text"
                  className="contact__formInput contact__formSmallInput"
                  id="formName"
                />
              </div>
              <div className="contact__formGroup">
                <label htmlFor="formPhone">Teléfono</label>
                <input
                  type="number"
                  className="contact__formInput contact__formSmallInput"
                  id="formPhone"
                />
              </div>
              <div className="contact__formGroup contact__textareaGroup">
                <label htmlFor="formBody">Tu Consulta</label>
                <textarea
                  className="contact__formInput"
                  id="formBody"
                ></textarea>
              </div>
            </div>
            <div className="contact__bottom">
              <button
                type="submit"
                className="button__black contact__formSubmit"
                onClick={(e) => handleSubmit(e)}
              >
                Enviar
              </button>
              <p>
                O mandanos un mail a{" "}
                <a href="mailto:info@nokk.com.ar">info@nokk.com.ar</a>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
