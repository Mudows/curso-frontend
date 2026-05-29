fetch('https://jsonplaceholder.typicode.com/users')
  .then(resposta => resposta.json())
  .then(dados => console.log(dados))


  /*     useEffect(() => {
        fetch('/https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setFuncionarios(data))
          .catch(error => console.error('Erro ao carregar os funcionários:', error));
    }, []) */