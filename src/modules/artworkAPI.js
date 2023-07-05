const fetchSingleArtworkDetails = async (artworkId) => {
  const ENDPOINT = 'https://api.artic.edu/api/v1/artworks';
  const url = `${ENDPOINT}/${artworkId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error fetching artwork details for id ${artworkId} data: Status code ${response.status} returned`,
      );
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw new Error('Unknown Error fetching artwork detals');
  }
};

export default fetchSingleArtworkDetails;