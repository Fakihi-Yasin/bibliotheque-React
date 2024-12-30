// src/components/Profile.tsx
import React from 'react';

const Portfolio: React.FC = () => {
  const author = {
    name: "Andy Horwitz",
    location: "New York",
    bio: "Web Developer, Photographer",
    publications: [
      { title: "Understanding React", year: 2021 },
      { title: "JavaScript Essentials", year: 2020 },
    ],
    photos: [
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp",
    ],
  };

  return (
    <div className="bg-blue-200">
      <div className="container mx-auto py-10 h-full">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg">
              {/* Header */}
              <div className="rounded-t-lg bg-black text-white flex flex-row" style={{ height: '200px' }}>
                <div className="flex flex-col items-center justify-center ml-5 mt-5" style={{ width: '150px' }}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Profile"
                    className="w-36 h-36 rounded-full border-4 border-white"
                  />
                  <button className="mt-2 px-4 py-1 border border-gray-700 text-gray-700 rounded-lg hover:bg-gray-100">
                    Edit profile
                  </button>
                </div>
                <div className="ml-5 mt-20">
                  <h5 className="text-xl font-semibold">{author.name}</h5>
                  <p className="text-gray-300">{author.location}</p>
                </div>
              </div>

              {/* About */}
              <div className="p-6 text-black">
                <div className="mb-6">
                  <p className="text-lg font-semibold mb-3">About</p>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <p className="italic mb-2">{author.bio}</p>
                  </div>
                </div>

                {/* Publications */}
                <div className="mb-6">
                  <p className="text-lg font-semibold mb-3">Publications</p>
                  <ul className="list-disc pl-5">
                    {author.publications.map((pub, index) => (
                      <li key={index} className="text-gray-800">{pub.title} ({pub.year})</li>
                    ))}
                  </ul>
                </div>

                {/* Recent Photos */}
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-semibold">Recent photos</p>
                  <a href="#!" className="text-sm text-gray-500 hover:underline">
                    Show all
                  </a>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {author.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Recent photo ${index + 1}`}
                      className="w-full rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; // Ensure this is exported correctly