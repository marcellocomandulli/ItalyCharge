import React from "react";
import Navbar from "../../../Navbar";
import { Helmet } from "react-helmet";
import { Input } from "postcss";

export default function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - ItalyCharge</title>
      </Helmet>

      <header className="flex justify-center">
        <div className="h-20 w-3/5 flex justify-center items-center border-solid border-b-2  md:mb-10 md:border-none">
          <h1 className="text-4xl font-semibold">ItalyCharge</h1>
        </div>
      </header>

      <div className="flex flex-col justify-center md:flex-row md:justify-around p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mb-6">
          <h2 className="text-2xl text-center font-semibold mb-5">Chi siamo</h2>
          <p className="text-xl tracking-wide text-justify">
            ItalyCharge ti aiuta a pianificare al meglio il tuo viaggio.{" "}
            <br></br><br></br>
            Gestisci in anticipo le stazioni di ricarica per la tua auto
            elettrica oppure per conoscere la posizione di quelle che ti
            circondano. <br></br> <br></br>Non rimarrai mai più senza carica.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Contatti
          </h2>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e1f56d]"
                placeholder="Nome"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e1f56d]"
                placeholder="E-mail"
              />
            </div>

            <div>
              <textarea
                id="message"
                rows="4"
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e1f56d]"
                placeholder="Scrivi il tuo messaggio..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-28 md:w-full py-3 bg-[#CBDA74] text-white font-semibold rounded-lg shadow-md hover:bg-[#afbd63] transition duration-300"
              >
                Invia
              </button>
            </div>
          </form>
        </div>
      </div>

      <nav>
        <Navbar />
      </nav>
    </>
  );
}
