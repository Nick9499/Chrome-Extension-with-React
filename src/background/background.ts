import { setStoredCities, setStoredOptions } from "../utils/storage";

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  setStoredCities([]);
  setStoredOptions({
    tempScale: "metric",
  });
});
