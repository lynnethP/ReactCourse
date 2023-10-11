export const getImagen = async() => {

    try {

        const apiKey = 'B5Ws4cnXqvcdnRz5vr8ffvqdU4jQafs9';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        console.log('No se encontro la imagen')
    }
    
    
    
}

 getImagen();



