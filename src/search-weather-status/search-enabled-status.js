import {
  citySubheadingElement,
  errorParagraphElement,
  humidityParagraphElement,
  temperatureHeadingElement,
  weatherIconElement,
  weatherInformationElement,
  windSpeedParagraphElement,
} from '../dom-references/html-references';

export const searchEnabledStatus = (data) => {
  errorParagraphElement.style.display = 'none';
  weatherInformationElement.style.display = 'block';

  citySubheadingElement.innerHTML = data.name;

  temperatureHeadingElement.innerHTML = `${Math.round(data.main.temp)}°c`;
  humidityParagraphElement.innerHTML = `${data.main.humidity}%`;

  windSpeedParagraphElement.innerHTML = `${data.wind.speed} km/h`;

  weatherIconElement.src = `./public/assets/${data.weather[0].main}.png`;
};
