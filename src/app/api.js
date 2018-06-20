const getUrl = curatorId => `https://spreadsheets.google.com/feeds/list/1fRgVp73YruyRfUAjzigPXbC_TBsfiNcXJKHpFhLkPxs/${curatorId}/public/values?alt=json`;

export const getAlbum = (curatorId, albumRow) => (
  fetch(getUrl(curatorId))
    .then(response => response.json())
    .then((data) => {
      const newAlbumTitle = data.feed.entry[albumRow].gsx$albumtitle.$t;
      const newArtist = data.feed.entry[albumRow].gsx$artist.$t;
      return { newAlbumTitle, newArtist };
    })
);

export const getAlbumListLength = curatorId => (
  fetch(getUrl(curatorId))
    .then(response => response.json())
    .then((data) => {
      if (!data.feed.entry) {
        return console.log('oh no, this is what happens when the sheet is empty');
      }
      const newAlbumListLength = data.feed.entry.length;
      return { newAlbumListLength };
    })
);
