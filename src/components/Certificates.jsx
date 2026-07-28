const certificates = [
  {
    id: 1,
    title: "MERN Stack Development",
    issuer: "CodeRexa Pvt. Ltd.",
    date: "June 2026",
    image: "/certificates/codRexa.jpeg",
    pdf: "/certificates/codRexa-Certificate.pdf",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-slate-950 text-white py-20 px-6 border-b-2 border-gray-500 "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Certificates</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            These certificates represent my continuous learning journey in web
            development and modern technologies.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >
              {/* Image */}

              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {certificate.title}
                </h3>

                <p className="text-slate-400 text-sm">{certificate.issuer}</p>

                <p className="text-cyan-400 text-sm mt-1">{certificate.date}</p>

                {/* Buttons */}

                <div className="flex gap-3 mt-6">
                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition"
                  >
                    View
                  </a>

                  <a
                    href={certificate.pdf}
                    download
                    className="flex-1 text-center py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
