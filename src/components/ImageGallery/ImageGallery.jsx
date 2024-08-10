import React from "react";

const ImageGallery = () => {
  return (
    <Grid>
      {data.map(({ id, description, urls }) => (
        <ImageCard key={id} url={urls.small} alt={} src={description} />
      ))}
    </Grid>
  );
};
export default ImageGallery;
