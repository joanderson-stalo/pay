
interface Option {
  value: string;
  label: string;
}


export const optionsData: { options: Option[] } = (() => {
  const currentYear = new Date().getFullYear();
  const options: Option[] = [];

  for (let year = 2020; year <= currentYear; year++) {
    options.push({ value: year.toString(), label: year.toString() });
  }

  return { options };
})();


interface Option {
  value: string;
  label: string;
}


const nomesDosMeses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export const optionsMeses: { options: Option[] } = (() => {
  const options: Option[] = nomesDosMeses.map((mes, index) => {
    return { value: (index + 1).toString(), label: mes };
  });

  return { options };
})();




