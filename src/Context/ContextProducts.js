import React, {useContext, useEffect, useState} from "react";
import {collection, getFirestore, getDocs} from 'firebase/firestore'

const Products = React.createContext();


export const ProductsProvider = ({children}) => {

    const [includedProducts, setIncludedProducts] = useState([]);
    const [accessoriesProducts, setAccessoriesProducts] = useState([]);
    const [metaQuestProduct, setMetaQuestProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const db = getFirestore()
    const refIncluded = collection(db, 'IncludedProducts')
    const refAccessories = collection(db, 'AccessoriesProducts')
    const refMetaQuest = collection(db, 'MetaQuest')



    // console.log(loading)

    useEffect(() => {
        getDocs(refIncluded)
            .then((snapShot) => {
                setIncludedProducts(
                    snapShot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                )

            })
        getDocs(refAccessories)
            .then((snapShot) => {
                setAccessoriesProducts(
                    snapShot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                )
            })
        getDocs(refMetaQuest)
            .then((snapShot) => {
                setMetaQuestProduct(
                    snapShot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                )
            })
            .then(
            setTimeout(() => {
                setLoading(!loading);
            }, "3000")
        )
    }, []);



    const openCart = () => {
        setIsCartOpen(!isCartOpen)

    }

    const isOnCart = (product) => {
        return cartItems?.findIndex(item => item.id === product.id)

    }

    const addToCart = (product) => {

        if (isOnCart(product) === -1) {
            setCartItems([...cartItems, product])
        } else {

        }

    }

    const deleteFromCart = (product) => {

        setCartItems(cartItems.filter(item => item.id !== product.id))

    }


    return (

        <Products.Provider value={{
            includedProducts,
            accessoriesProducts,
            metaQuestProduct,
            isCartOpen,
            loading,
            openCart,
            addToCart,
            cartItems,
            deleteFromCart
        }}>
            {children}
        </Products.Provider>
    )
}


export function useIsCartOpen() {
    return useContext(Products).isCartOpen
}

export function useCartOpen() {
    return useContext(Products).openCart
}

export function useAddToCart() {
    return useContext(Products).addToCart
}

export function useCartItems() {
    return useContext(Products).cartItems
}

export function useDeleteFromCart() {
    return useContext(Products).deleteFromCart
}


export default Products