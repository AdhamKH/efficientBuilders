export const mainUrl = "https://contractors.boxbyld.tech/api/v1";
export let companyId = "5";

export const fetcHomehData = async () => {
  const res = await fetch(`${mainUrl}/companies/${companyId}`, {
    cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
export const fetcHomehSlider = async () => {
  const res = await fetch(`${mainUrl}/sliders/${companyId}`, {
    cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const fetcHomeIntro = async () => {
  const data = await fetch(`${mainUrl}/intros/${companyId}`, {
    cache: "no-cache",
  }).then((response) => response.json());
  return data;
};

export const fetcAboutData = async () => {
  const data = await fetch(`${mainUrl}/stories/story/${companyId}`, {
    cache: "no-cache",
  }).then((response) => response.json());
  return data;
};

export const fetcAboutEmphasizesData = async () => {
  const data = await fetch(`${mainUrl}/emphasizes/${companyId}`, {
    cache: "no-cache",
  }).then((response) => response.json());
  return data;
};
