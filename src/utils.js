const formatPrice = (x) => {
    if (typeof x == 'string')
        return x.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    if (typeof x == 'number')
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    else return x
};

export {formatPrice}