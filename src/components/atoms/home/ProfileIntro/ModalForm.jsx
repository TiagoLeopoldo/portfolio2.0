import { useState } from "react";
import emailjs from "emailjs-com";

const ModalForm = ({ isOpenForm, setIsOpenForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_glf2hms",
        "template_m1i7yji",
        templateParams,
        "QNl-kiiLAxVmzJNR-"
      )
      .then(() => {
        setMensagemEnviada(true); // ✅ ativa a mensagem
        setFormData({ email: "", subject: "", message: "" });

        setTimeout(() => {
          setMensagemEnviada(false);
          setIsOpenForm(false);
        }, 2000);
      })
      .catch(() => {
        alert("Erro ao enviar. Tente novamente.");
      });
  };

  if (!isOpenForm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent animate-fadeInModal">
      <div className="bg-[#282C33] border border-solid border-[#1B98E0] rounded-md shadow-md rounded-lg shadow-lg p-6 w-[50%] h-[70%] relative overflow-hidden">
        <button
          onClick={() => setIsOpenForm(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
          aria-label="Fechar modal"
        >
          [fechar x]
        </button>

        <h2 className="text-lg font-semibold mb-4">Envie uma mensagem</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
            className="mb-3 w-full p-2 border rounded"
            required
          />
          <input
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Assunto"
            className="mb-3 w-full p-2 border rounded"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Sua mensagem"
            className="mb-3 w-full p-2 border rounded h-75 resize-none overflow-y-auto"
            required
          />
          <div className="flex gap-5">
          <button
            type="submit"
            className="lg:flex items-center justify-center w-[9.25rem] h-[2.3125rem] border border-solid border-[#1B98E0] rounded-md shadow-md text-center text-[0.9375rem] font-medium font-bold p-[0.5rem_1rem_0.5rem_1rem] opacity-70 mt-[0.625rem] transition-all duration-300 hover:shadow-lg active:scale-[0.8]"
          >
            Enviar
          </button>
          {mensagemEnviada && (
            <p className="text-[#1B98E0] font-bold text-sm bg-[#1b98e015] px-4 py-2 rounded-md shadow-sm">
              ✔️ Mensagem enviada
            </p>
          )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
