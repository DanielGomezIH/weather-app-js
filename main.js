import {
  searchEnabledStatus,
  searchDisabledStatus,
} from './src/search-weather-status';

import {
  searchBoxElement,
  searchBtnElement,
} from './src/dom-references/html-references';

async function checkWeather(city) {
  const url = `${import.meta.env.VITE_BASE_URL}${city}&appid=${
    import.meta.env.VITE_API_KEY
  }`;

  const response = await fetch(url);

  if (response.status == 400) {
    searchDisabledStatus();
  } else {
    const data = await response.json();
    searchEnabledStatus(data);
  }
}

searchBtnElement.addEventListener('click', () => {
  checkWeather(searchBoxElement.value);
});
