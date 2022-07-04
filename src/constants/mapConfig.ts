const initialZoom = 18;

export const API_SETTINGS: APITYPE = {
  apiKey: "add_API_Key_here",
  mapIds: ["1ff166c90cc8691d", "5e99dea3f92c1f0d", "b7afcb8be0f9883"],
  region: "US",
  language: "EN",
};

export const MAP_SETTINGS = {
  tilt: 67.5,
  heading: 0,
  zoom: initialZoom,
  center: {
    lat: 40.776676,
    lng: -73.971321,
  },
  mapId: "5e99dea3f92c1f0d",
  disableDefaultUI: true,
  draggable: true,
  zoomControl: false,
  isFractionalZoomEnabled: false,
};
