
export const formatCurrency = (quantity: number) => {
    return new Intl.NumberFormat('es-US', 
        { style: 'currency', currency: 'USD' }).format(quantity);
};