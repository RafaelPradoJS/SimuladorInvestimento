function simularInvestimento() {
  const valor = parseFloat(document.getElementById('valor').value);
  const meses = parseInt(document.getElementById('periodo').value);

  const resultado = document.getElementById('resultado');

  if (isNaN(valor) || isNaN(meses) || valor <= 0 || meses <= 0) {
    resultado.innerHTML = '<p>Preencha os campos corretamente.</p>';
    return;
  }

  const taxaSelic = 0.0104; // 1,04% ao mês
  const taxaPoupanca = 0.0062; // 0,62% ao mês

  const montanteSelic = valor * Math.pow(1 + taxaSelic, meses);
  const montantePoupanca = valor * Math.pow(1 + taxaPoupanca, meses);

  resultado.innerHTML = `
    <p><strong>Resultado após ${meses} meses:</strong></p>
    <p>Com Selic: R$ ${montanteSelic.toFixed(2)}</p>
    <p>Com Poupança: R$ ${montantePoupanca.toFixed(2)}</p>
  `;
}
