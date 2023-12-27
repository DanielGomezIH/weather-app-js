import {
  errorParagraphElement,
  weatherInformationElement,
} from '../dom-references/html-references';

export const searchDisabledStatus = () => {
  errorParagraphElement.style.display = 'block';
  weatherInformationElement.style.display = 'none';
};
