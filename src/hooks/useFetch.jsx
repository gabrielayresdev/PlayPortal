import React from "react";

// customHook para realizar requisições a APIs
const useFetch = () => {
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let json;
    let response;
    try {
      setError(false);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      // Se a response não estiver no range de 200 a 299, um erro será gerado e capturado pelo catch
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      // Limpa o valor de json para não ser usado como data
      json = null;
      setError(err.message);
    } finally {
      setLoading(false);
      setData(json);
    }
  }, []);

  return { error, data, loading, request };
};

export default useFetch;
