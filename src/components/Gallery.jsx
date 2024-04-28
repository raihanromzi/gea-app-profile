export default function Gallery() {
  const images = [
    { src: "/path-to-image-1.jpg", description: "Description of image 1" },
    { src: "/path-to-image-2.jpg", description: "Description of image 2" },
    { src: "/path-to-image-3.jpg", description: "Description of image 3" },
    { src: "/path-to-image-4.jpg", description: "Description of image 4" },
    { src: "/path-to-image-5.jpg", description: "Description of image 5" },
  ];

  return (
    <>
      <header>
        <h2>Cat Photos</h2>
      </header>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image">
            <img src={image.src} alt={`City View ${index + 1}`} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
