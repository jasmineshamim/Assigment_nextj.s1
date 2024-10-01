
type CountryKeys = 'canada' | 'uk' | 'england' | 'australia' | 'thailand';

export default function CountriesInfo({ params }: { params: { country_name: string } }) {
  const country_name: Record<CountryKeys, { name: string; population: string; capital: string }> = {
      canada: {
          name: "Canada",
          population: "10.973 million",
          capital: "Ottawa"
      },
      uk: {
          name: 'United Kingdom',
          population: '67 million',
          capital: 'London'
      },
      england: {
          name: 'England',
          population: '56 million',
          capital: 'London'
      },
      australia: {
          name: 'Australia',
          population: '25 million',
          capital: 'Canberra'
      },
      thailand: {
          name: 'Thailand',
          population: '70 million',
          capital: 'Bangkok'
      },
  };

  const countryName = params.country_name.toLowerCase() as CountryKeys; // Assert type to CountryKeys

  // Check if the country information exists
  if (country_name[countryName]) {
      const country = country_name[countryName];
      return (
          <div>
              <p>Name: {country.name}</p>
              <p>Population: {country.population}</p>
              <p>Capital: {country.capital}</p>
          </div>
      );
  } else {
      return <h1>Country not found!</h1>;
  }
}
