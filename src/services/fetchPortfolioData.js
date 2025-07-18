const fetchData = async () => {
  try{
    const response = await fetch('https://raw.githubusercontent.com/TiagoLeopoldo/portfolio-data/main/dynamic.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao carregar dados:", error);
  }
}

export default fetchData;