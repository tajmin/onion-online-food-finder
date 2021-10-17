// use local storage as your db for now
const addToLocalCart = meal => {
    const { id, quantity } = meal;
    const exists = getLocalDB();
    let shopping_cart = {};
    if (!exists) {
        shopping_cart[id] = quantity;
    }
    else {
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + quantity;
            shopping_cart[id] = newCount;
        }
        else {
            shopping_cart[id] = quantity;
        }
    }
    updateLocalDB(shopping_cart);
}

const getLocalDB = () => localStorage.getItem('shopping_cart');

const updateLocalDB = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const removeFromLocalCart = id => {
    const cart = getLocalDB();
    if (cart) {
        const shopping_cart = JSON.parse(cart);
        delete shopping_cart[id];
        updateLocalDB(shopping_cart);
    }
}

const getLocalCart = () => {
    const cart = getLocalDB();
    return cart ? JSON.parse(cart) : {};
}

const deleteLocalDB = () => {
    localStorage.removeItem('shopping_cart');
}

export { addToLocalCart, removeFromLocalCart, deleteLocalDB, getLocalCart }