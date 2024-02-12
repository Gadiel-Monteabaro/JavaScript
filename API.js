// API __ Metodos que brinda una libreria, para ser utilizada por otro software como una capa de abstracción.

// API __ Permite disponer de recursos que estan aloojadas en otros servidores o bases de datos.

// API __ Usualmente las peticiones se realizan de forma estructurada.

// API __ Entrega una respuesta de tipo JSON.

// Con JavaScript, utilizamos Fetch API y obtener los datos para mostrarlos en la pantalla.

// API __ Alguanas requieren un KEY, y otras estan protegidas por CORS.
const consultarApi = async () => {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD#";

  const respuesta = await fetch(url);
  const resultado = await respuesta.json();

  const arrayCryptos = resultado.Data.map((cripto) => {
    const objeto = {
      id: cripto.CoinInfo.Name,
      nombre: cripto.CoinInfo.FullName,
    };

    return objeto;
  });
};
consultarApi();
