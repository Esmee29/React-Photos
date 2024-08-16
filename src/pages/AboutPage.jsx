const AboutPage = () => {
  return (
    <div className="about-page max-w-screen-md mx-auto p-4">
      <h1 className="text-center text-4xl font-bold mb-8">About This Portfolio</h1>
      <p className="text-lg leading-8 mb-8">
        This site showcases my passion for capturing moments, both digitally and on film. I use a mix of digital photography with my trusty Nikon D3300 and film photography with a Canon Sure Shot AF-7, after experimenting with various cameras. I&apos;ve explored different film stocks to see the unique results they offer, though most of my recent work is shot on Kodak Gold 200, which I love for its rich colors. I hope you enjoy exploring my work as much as I enjoyed creating it.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Work</h2>
        <div className="grid grid-cols-2 gap-4">
          <img src="/assets/Photos/000061820036.jpg" alt="Sunset" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/assets/Photos/000061820028.jpg" alt="Mountain" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/assets/Photos/000063640021.jpg" alt="Cromer Pier" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/assets/Photos/000016390034.jpg" alt="Windmil" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">My Photography Journey</h2>
        <p className="text-lg leading-8 mb-8">
          I have loved photography since I was a child, starting with my first camera and capturing anything that caught my eye. Over the years, I&apos;ve experimented with many different cameras, each offering a new perspective and way to see the world. Photography is more than just a hobby for me; it&apos;s a way to express my creativity and find inspiration for my design work. The process of framing a shot, capturing light, and playing with composition has deeply influenced my approach to design, fueling my passion for both art forms.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Techniques and Gear</h2>
        <p className="text-lg leading-8">
          I shoot digitally with a Nikon D3300, which offers the flexibility to capture high-quality images in various conditions. On the film side, I&apos;ve tried several cameras, finally settling on the Canon Sure Shot AF-7 for its reliability and character. My film of choice is Kodak Gold 200, known for its vibrant color rendition, which perfectly complements my style.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;