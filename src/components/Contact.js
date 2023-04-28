import React from "react";

export default function Contact() {
    return (
   
    <div id="contact" className="contact" style={{
      minHeight: "120vh",
      
    }}>
      
          
            <div>
              <h2 >
                DIRECCIÓN
              </h2>
              <p >
                Calle Israel S/N <br />
                Potisi - Bolivia
              </p>
            </div>
            <div >
              <h2 >
                CORREO ELECTRÓNICO
              </h2>
              <a >
                pelaez6and4@email.com
              </a>
              <h2 >
                NÚMERO DE CELULAR
              </h2>
              <p >78713588</p>
            </div>
          
      
        <form >
          
          <h2 >
            ¡Contrátame!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div>
            <label >
              Nombre
            </label>
             
          </div>
          <div >
            <label htmlFor="email">
              Correo electrónico
            </label>
            
          </div>
          <div>
            <label>
              
              Mensaje
            </label>
            <textarea/>
          </div>
          <button>
           Enviar
          </button>
        </form>
      
    </div>
  );
}
