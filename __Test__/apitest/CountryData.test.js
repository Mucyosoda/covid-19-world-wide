/* eslint-disable*/

import { fetchCountriesFromApi } from '../../apis/CountryData';

describe('fetching from api', () => {
  test('data contains object indeed', async () => {
    const data = await fetchCountriesFromApi();
    expect.objectContaining(data);
  });

  test('data have property countries', async () => {
    const data = await fetchCountriesFromApi();
    expect(data).toHaveProperty('countries');
  });
});
