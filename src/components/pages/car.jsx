import React from "react";
import ProductData from "../../assets/products/productData";
import { RiDeleteBin6Line } from "react-icons/ri";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_TYooMQauvdC8wAqU5W1Jt7bM"); // Reemplaza con tu clave pública de prueba

const CheckoutForm = ({ total, setCart }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Simular la creación de un PaymentIntent
    const response = await fetch("http://localhost:5000/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total * 100 }), // La cantidad en centavos
    });

    const { clientSecret } = await response.json();

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Cliente de Prueba",
        },
      },
    });

    if (error) {
      console.error(error);
    } else if (paymentIntent.status === "succeeded") {
      console.log("¡Pago exitoso!");
      // Limpia el carrito o realiza otras acciones necesarias
      setCart([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        type="submit"
        disabled={!stripe}
        className="font-candara bg-gradient-to-r from-darkorange to-orange transition-all duration-200 text-beige py-1 px-4 rounded-full mt-3"
      >
        Shop Now! 
      </button>
    </form>
  );
};

export default function Car({ cart, setCart }) {
  const productMap = ProductData.reduce((map, product) => {
    map[product.id] = product;
    return map;
  }, {});

  const total = cart.reduce((acc, item) => {
    const product = productMap[item.id];
    const quantity = item.quantity || 1; // Definir cantidad por defecto si no está presente
    return acc + (product ? parseFloat(product.price) * quantity : 0);
  }, 0);

  return (
    <div className="container mt-14 mb-12">
      <h1 className="text-3xl font-belvina text-darkblue">Shopping Car</h1>
      <div>
        {cart.length === 0 ? (
          <p className="font-candara text-darkblue py-5">Your cart is empty</p>
        ) : (
          <div className="py-5">
            {cart.map((item, index) => {
              const product = productMap[item.id];
              const quantity = item.quantity || 1; // Definir cantidad por defecto si no está presente
              return product ? (
                <div key={index} className="flex items-center mb-4">
                  <img
                    src={product.img}
                    alt={`Product ${product.id}`}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="ml-4 flex-grow">
                    <h2 className="text-darkblue font-candara">
                      {product.description}
                    </h2>
                    <p className="text-darkblue font-candara">
                      CAD ${parseFloat(product.price).toFixed(2)} x {quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="font-candara bg-gradient-to-r from-darkorange to-orange transition-all duration-200 text-beige py-1 px-4 rounded-full flex items-center gap-3 group"
                  >
                    <span className="group-hover:block hidden transition-all duration-200">
                      Remove
                    </span>
                    <RiDeleteBin6Line className="text-xl text-beige drop-shadow-sm cursor-pointer" />
                  </button>
                </div>
              ) : null;
            })}
            <div className="mt-5">
              <h2 className="text-xl font-belvina text-darkblue">
                Total: CAD ${total.toFixed(2)}
              </h2>
              <Elements stripe={stripePromise}>
                <CheckoutForm total={total} setCart={setCart} />
              </Elements>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
