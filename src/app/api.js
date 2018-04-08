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
          const newAlbumTitle = res.data.rows[albumRow].albumtitle;
          const newArtist = res.data.rows[albumRow].artist;
          return { newAlbumTitle, newArtist };
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
          const newAlbumListLength = res.data.rows.length;
          return newAlbumListLength;
        }))
);
