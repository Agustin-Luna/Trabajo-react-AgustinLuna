import ItemCard from "../ItemCard/ItemCard"


const ItemList = ({ productos }) => {
    return (
        <section className="container mx-auto mt-8 flex flex-wrap justify-center">
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