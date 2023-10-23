import { Link, useLoaderData } from "react-router-dom"
import { BsArrowRight } from 'react-icons/bs';
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext } from "react";
import { CardContext } from "../../Component/HandleContext/HandleContext";

function HomeCategory() {
    const {AddIdLocal} = useContext(CardContext);
    const {datas} = useLoaderData();
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#C5C3D8'
    }
    const handleAddCart = (id)=>{
        AddIdLocal(id)
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-5 gap-x-0 gap-y-5 md:gap-5">
            {
                datas && datas.map((product) => {
                    return <div className="flex justify-center" key={product.id}>
                        <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border shadow-md bg-white">
                            <Link to={`/product/${product.id}`} className="relative mx-3 mt-3 flex h-40 md:h-48 lg:h-52 overflow-hidden rounded-xl" href="#">
                                <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={`https://online-shop-server-f69l.onrender.com/api/getImage/${product.id}`} alt="product image" />
                                <img className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src={`https://online-shop-server-f69l.onrender.com/api/getImage/${product.id}`} alt="product image" />
                                <svg className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
                            </Link>
                            <div className="mt-4 px-5 pb-5">
                                <Link to={`/product/${product.id}`}>
                                    <h5 className="text-xl tracking-tight">{product.product_model}</h5>
                                </Link>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                                        {
                                            (parseInt(product.discount)>0) && <span className="text-sm text-slate-900 line-through font-medium">${parseInt(product.price)-(parseInt(product.price)*parseInt(product.discount)/100)}</span>
                                        }
                                    </p>
                                    <div className="flex items-center w-24">
                                        <Rating style={{ maxWidth: 500 }} readOnly value={Math.random() * 3 + 2} itemStyles={myStyles} />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <button onClick={()=>handleAddCart(product.id)} className="hover:border-white/40 w-full hover:bg-orange-400 flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 duration-200 focus:ring-orange-600">
                                        Add to cart
                                        <BsArrowRight className="ml-1"></BsArrowRight>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
  )
}

export default HomeCategory