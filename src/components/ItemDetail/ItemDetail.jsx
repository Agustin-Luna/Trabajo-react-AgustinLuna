import Boton from "../../utils/Boton";

const ItemDetail = ({ item }) => {
    return (
      <div key={item.id} className="w-80 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 bg-gray-300 border border-gray-300 rounded-md p-4 ml-12 mt-4">
        <img src={item.img} alt={item.name} className="w-full h-80 object-cover" />
        <p className="text-2xl font-semibold ml-2">{item.nombre}</p>
        <p className="text-xl font-bold ml-2">Precio: ${item.precio}</p>
        <Boton className="flex m-2">Agregar al carrito</Boton>
      </div>
    );
  };
  
  export default ItemDetail;