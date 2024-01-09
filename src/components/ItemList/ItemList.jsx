import ItemCard from "../ItemCard/ItemCard"
import Boton from "../../utils/Boton";
import { userContext } from "../context/UserContext";
import { useContext } from "react";

const ItemList = ({ productos }) => {

    const { user, logOut } = useContext(userContext)

    return (
        <section className="container mx-auto mt-2 flex flex-wrap justify-center">
            <div  className='flex items-center mb-10 w-full' >
            {user.logged && (
                <div className='mr-2 ml-4 flex items-center'>
                    <p className='mr-2'>{user.email}</p>
                    <Boton onClick={logOut} className='px-0.5 py-0.5'>
                        Cerrar sesión
                    </Boton>
                </div>
            )}
            </div>
            <div className="grid gap-8 grid-cols-3">
                {productos.map((item) => (
                    <div key={item.id} className="col-span-1">
                        <ItemCard item={item} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ItemList