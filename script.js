const input = document.getElementById('conta');
    const resultado = document.getElementById('resultado');

    input.addEventListener('input', () => {
      const valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        const economia = (valor * 0.2 * 12).toFixed(2);
        resultado.textContent = `Você pode economizar aproximadamente R$ ${economia} por ano!`;
      } else {
        resultado.textContent = '';
      }
    });
    window.addEventListener('pageshow', function(event) {
      if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        document.getElementById("formulario").reset();
      }
    })