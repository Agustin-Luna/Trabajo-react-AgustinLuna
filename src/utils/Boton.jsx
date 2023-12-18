const Boton = ({ children, className = "", onClick }) => {

    return (
        <button
        onClick={onClick}
        className={`bg-black rounded flex items-center py-2 px-4 text-center text-white font-semibold my-4 hover:text-red-600 transition duration-300 ${className}`}>
        {children}
    </button>
    );
};

export default Boton;