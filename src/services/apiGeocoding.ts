type LatAndLng = {
  latitude: string;
  longitude: string;
};

export async function getAddress({ latitude, longitude }: LatAndLng): any {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data: any = await res.json();
  return data;
}
