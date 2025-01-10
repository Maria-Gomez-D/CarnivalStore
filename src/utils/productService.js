import { 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc,
    query,
    where
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';

// Colección de productos
const PRODUCTS_COLLECTION = 'products';

// Función para subir una imagen al Storage
export const uploadProductImage = async (file, productId) => {
    const storageRef = ref(storage, `products/${productId}/${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
};

// Función para añadir un nuevo producto
export const addProduct = async (productData, imageFile) => {
    try {
        // Primero añadimos el producto a Firestore
        const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), {
            name: productData.name,
            description: productData.description,
            prices: {
                withoutShaker: productData.prices.withoutShaker,
                withShakerAndLights: productData.prices.withShakerAndLights
            },
            category: productData.category,
            createdAt: new Date()
        });

        // Si hay una imagen, la subimos al Storage
        if (imageFile) {
            const imageUrl = await uploadProductImage(imageFile, docRef.id);
            // Actualizamos el documento con la URL de la imagen
            await updateDoc(doc(db, PRODUCTS_COLLECTION, docRef.id), {
                imageUrl: imageUrl
            });
        }

        return docRef.id;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

// Función para obtener todos los productos
export const getAllProducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error getting products:', error);
        throw error;
    }
};

// Función para obtener productos por categoría
export const getProductsByCategory = async (category) => {
    try {
        const q = query(
            collection(db, PRODUCTS_COLLECTION), 
            where("category", "==", category)
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error getting products by category:', error);
        throw error;
    }
};

// Función para actualizar un producto
export const updateProduct = async (productId, updateData, newImageFile) => {
    try {
        const productRef = doc(db, PRODUCTS_COLLECTION, productId);

        // Si hay una nueva imagen, la subimos
        if (newImageFile) {
            const imageUrl = await uploadProductImage(newImageFile, productId);
            updateData.imageUrl = imageUrl;
        }

        await updateDoc(productRef, updateData);
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

// Función para eliminar un producto
export const deleteProduct = async (productId) => {
    try {
        await deleteDoc(doc(db, PRODUCTS_COLLECTION, productId));
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};
