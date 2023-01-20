export function createData(
  index,
  launchedDate,
  location,
  mission,
  orbit,
  launchedStatus,
  rocket,
  upcoming
) {
  return {
    index,
    launchedDate,
    location,
    mission,
    orbit,
    launchedStatus,
    rocket,
    upcoming,
  };
}
export const createModelData = (
  image,
  missionName,
  lanchStatus,
  rocketname,
  nasalink,
  wikipedialink,
  youtubelink,
  details,
  flightnumber,
  rocketType,
  rocketName,
  manufacturer,
  nationality,
  launchdate,
  payloadType,
  orbit,
  launchSite,
  upcoming
) => {
  return {
    image,
    missionName,
    lanchStatus,
    rocketname,
    nasalink,
    wikipedialink,
    youtubelink,
    details,
    flightnumber,
    rocketType,
    rocketName,
    manufacturer,
    nationality,
    launchdate,
    payloadType,
    orbit,
    launchSite,
    upcoming,
  };
};
