import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa"
import Cards from '../../Components/Cards';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredItems, setFliteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                //console.log(data)
                setProducts(data)
                setFliteredItems(data)


            }
            catch (error) {
                console.log("Error fetching data:", error)
            }
        }
        fetchData();
    }, [])
    //console.log(products);

    // filter function
    const filterItems = (category) => {
        const filtered = category === "all" ? (products) : products.filter((item) => item.category === category)
        setFliteredItems(filtered);
        setSelectedCategory(category);
    }
    // show all products
    const showAll = () => {
        setFliteredItems(products);
        selectedCategory("all");
    }

    // sorting
    const handleSortChange = (option) => {
        setSortOption(option);

        let sortedItems = [...filteredItems];

        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.title.localeCompare(b.title));
                break;

            case "Z-A":
                sortedItems.sort((a, b) => b.title.localeCompare(a.title));
                break;

            case "low-to-high":
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        setFliteredItems(sortedItems);
    }


    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
            <h2 className='title'>Or subscribe to the newsletter</h2>
            {/* Products */}
            <div>
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>

                    {/* product button */}
                    <div className='flex justify-start items-center gap-8'>
                        <button onClick={showAll}> All Products</button>
                        <button onClick={() => filterItems("Dress")}>Cloothing</button>
                        <button onClick={() => filterItems("Hoodies")}>Hodies</button>
                        <button onClick={() => filterItems("Bag")}>Bag</button>
                    </div>

                    {/* sorting */}
                    <div className='flex justify-end mb-4 rounded-sm'>
                        <div className='bg-black p-2'>
                            <FaFilter className='  text-white h-4 w-4' />
                        </div>
                        <select  id="sort"
                        onChange={(e) => handleSortChange(e.target.value)}
                        value={sortOption}
                         className='bg-black text-white px-2 py-1 rounded-sm'>
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="low-to-high">Low-to-High</option>
                            <option value="high-to-low">High-to-Low</option>

                        </select>
                    </div>

                </div>
                <Cards filteredItems={filteredItems} />
            </div>

            {/* <div>
                {
                     products.map((item)=>(
                         <div key={item.id}>
                            <Link to={`/shop/${item.id}`}>
                                <img src={item.image} alt="" />
                            </Link>
                        </div>
                     ))
                 }
            </div> */}
        </div>
    )
}

export default Products