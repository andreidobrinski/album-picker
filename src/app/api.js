const ROOT_URL = 'http://gsx2json.com/api?id=1fRgVp73YruyRfUAjzigPXbC_TBsfiNcXJKHpFhLkPxs&columns=false&sheet=';

export const getAlbum = (curator, albumRow) => (
  fetch(`${ROOT_URL}${curator}`)
    .then(response =>
      response.json()
        .then(data => ({
          data,
          status: response.status,
        }))
        .then((res) => {
          const newArtist = res.data.rows[albumRow].artist;
          const newAlbumTitle = res.data.rows[albumRow].albumtitle;
          return { newArtist, newAlbumTitle };
        }))
);

export const getAlbumListLength = curator => (
  fetch(`${ROOT_URL}${curator}`)
    .then(response =>
      response.json()
        .then(data => ({
          data,
          status: response.status,
        }))
        .then((res) => {
          const albumListLength = res.data.rows.length;
          return albumListLength;
        }))
);
