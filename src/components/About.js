import React from "react";
export default function About(title, id ) {
  return (
    <section id="about" className="about"style={{
      minHeight: "80vh", 
      margin: "0.5em",
      paddingLeft: 60,
      paddingRight: 200,
      listStyle:"'none",
      background: "green"
    }}>
  
        <div >
           <h2>Acerca de mi</h2> 
           <p>Severina Pelaez Chura</p>
          <p >
            Naci y creci en Bolivia en el departamento de Potosi.
            <br></br>
            Mi interes en el mudo de la tecnologia inicio el dia en que encendi una computadora por primera vez,
            una emocion inolvidable.
            <br></br>
            En el transcurso de los anos de estudio, comprendi que el proceso de cada sistema, aplicacion y otros,
            <br></br>
            por lo pequena q paresca tiene un proceso mas complicado de lo que parece, requiriendo personal calificado y capacitado.
          </p>
          
        </div>
    </section>
  );
}
