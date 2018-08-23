const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://localhost:3001';

//dont need ,opts because GET is the default
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
  
  // need ,opts for anything thats not GET 
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
  // notice the corret url path
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
  
  // notice the corret url path
  return fetch(`${BASE_URL}/auth/register`, opts)
  .then(resp => resp.json())
  .catch(err => {
    throw Error(err);
  });
}

export function fetchFavorites() {
  return fetch(`${BASE_URL}/favorites`)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}

export function saveFavorites(Favorite) {
  const opts = {
    method: 'POST',
    body: JSON.stringify(Favorite),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  // need ,opts for anything thats not GET 
  return fetch(`${BASE_URL}/Favorites`, opts)
  .then(resp => resp.json())
  .catch(err => {
    throw Error(err);
  });
}

export function destroyFavorites(Favorite) {
  const opts = {
    method: 'DELETE'
  }
  
  return fetch(`${BASE_URL}/favorites/${Favorite}`, opts)
  .catch(err => {
    throw Error(err);
  });
}