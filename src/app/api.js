const getUrl = curator => `https://spreadsheets.google.com/feeds/list/1fRgVp73YruyRfUAjzigPXbC_TBsfiNcXJKHpFhLkPxs/${curator}/public/values?alt=json`;

export const getAlbum = (curator, albumRow) => (
  fetch(getUrl(curator))
    .then(response => response.json())
    .then((data) => {
      const newAlbumTitle = data.feed.entry[albumRow].gsx$albumtitle.$t;
      const newArtist = data.feed.entry[albumRow].gsx$artist.$t;
      return { newAlbumTitle, newArtist };
    })
);

export const getAlbumListLength = curator => (
  fetch(getUrl(curator))
    .then(response => response.json())
    .then((data) => {
      const newAlbumListLength = data.feed.entry.length;
      return { newAlbumListLength };
    })
);
