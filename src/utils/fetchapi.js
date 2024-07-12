export const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        return data.map(item => ({
            id: item.id,
            title: item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title,
            description: item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description,
            price: item.price,
            image: item.image
        }));
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

    
