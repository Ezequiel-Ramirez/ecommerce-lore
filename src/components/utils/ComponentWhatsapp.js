export default function ComponentWhatsapp(producto) {

    const urlProducto = `https://ecommerce-lore.vercel.app/product/${producto.id}`;
    let saltoLinea = "%0D%0A";
    const numeroCelular = "91154547386";
    const textoMensaje = `Hola LoveByLore, estoy interesado en el producto: ${saltoLinea} ${saltoLinea} -${producto.title} a  $${producto.price}.00 ${saltoLinea} ${saltoLinea} ${urlProducto}`;
    const wspLink = `https://api.whatsapp.com/send?phone=54${numeroCelular}&text=${textoMensaje}&app_absent=0`;
    window.open(wspLink, "_blank");
}