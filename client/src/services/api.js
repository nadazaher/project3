const BASE_URL = 'http://localhost:3001';

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

export function saveProduct(Product) {
  const opts = {
    method: 'POST',
    body: JSON.stringify(Product),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${BASE_URL}/Products`, opts)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}

export function modifyProduct(Product) {
  const opts = {
    method: 'PUT',
    body: JSON.stringify(Product),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${BASE_URL}/Products/${Product.id}`, opts)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}

export function destroyProduct(Product) {
  const opts = {
    method: 'DELETE'
    }

  return fetch(`${BASE_URL}/Products/${Product}`, opts)
  .catch(err => {
    throw Error(err);
  });
}

export function loginUser(userInfo) {
  const opts = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${BASE_URL}/auth/login`, opts)
  .then(resp => resp.json())
  .catch(err => {
    throw Error(err);
  });
}

export function registerUser(userInfo) {
  const opts = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${BASE_URL}/auth/register`, opts)
  .then(resp => resp.json())
  .catch(err => {
    throw Error(err);
  });
}
