const BASE_URL = 'http;//localhost:3001';

export function fetchCompanies() {
  return fetch(`${BASE_URL}/companies`)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}

export function fetchProducts() {
  return fetch(`${BASE_URL}/products`)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}