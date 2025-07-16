const ModalForm = ({ isOpenForm, setIsOpenForm }) => {
  if (!isOpenForm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent animate-fadeInModal">
      <div className="bg-[#282C33] border border-solid border-[#1B98E0] rounded-md shadow-md rounded-lg shadow-lg p-6 w-[50%] h-[50%] relative overflow-hidden">
        <button
          onClick={() => setIsOpenForm(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
          aria-label="Fechar modal"
        >
          [fechar x]
        </button>

        <h2 className="text-lg font-semibold mb-4">Envie uma mensagem</h2>
        <form>
          <input
            type="email"
            placeholder="Seu e-mail"
            className="mb-3 w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Assunto"
            className="mb-3 w-full p-2 border rounded"
          />
          <textarea
            placeholder="Sua mensagem"
            className="mb-3 w-full p-2 border rounded h-32 resize-y max-h-[calc(50vh-6rem)] overflow-y-auto"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
