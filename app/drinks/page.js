import DrinksList from '@/components/DrinksList';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`HTTP error! status: ${resp.status}`);
  }
  const data = await resp.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
