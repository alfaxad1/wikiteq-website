import { 
  Linkedin, 
  Mail, 
  Globe, 
  Users,
  Award,
  Zap,
  Briefcase
} from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Wycliff Vuzigu",
      role: "Founder & Director",
      bio: "Visionary leader with 8+ years in tech entrepreneurship and digital transformation across Africa.",
      expertise: ["Business Strategy", "Digital Transformation", "Tech Leadership", "Digital Marketing", "Mobile Applications", "E-commerce Solutions", "Cloud Computing", "AI & Machine Learning",],
      image: "/public/images/wiki.jpg",
      color: "from-blue-500 to-cyan-500",
      social: {
        linkedin: "https://www.linkedin.com/in/wycliff-vuzigu/",
        email: "wycliff@wikiteq.co.ke",
        website: "#"
      }
    },
    {
      id: 2,
      name: "Preston Wagabi",
      role: "Business Development Manager & Director",
      bio: "Experienced business development professional driving growth and strategic partnerships in the tech sector.",
      expertise: ["Sales Strategy", "Client Relations", "Market Analysis", "Partnership Development", "Negotiation",  "Project Management", "Lead Generation", "Networking"],
      image: "/public/images/pres.jpeg",
      color: "from-orange-500 to-red-500",
      social: {
        linkedin: "https://www.linkedin.com/in/preston-wagabi-8aab68277/",
        email: "preston@wikiteq.co.ke",
        website: "#"
      }
    },
    {
      id: 3,
      name: "Alfaxad Ogesa",
      role: "Software Engineer",
      bio: "Full-stack developer specializing in scalable systems and cloud architecture. Passionate about clean code and robust solutions.",
      expertise: ["React/Next.js", "Node.js","Spring boot", "Cloud Architecture", "DevOps", "Database Management", "Agile Methodologies", "Testing & QA", "Performance Optimization"],
      image: "/public/images/alfaxad.jpeg",
      color: "from-purple-500 to-pink-500",
      social: {
        linkedin: "https://www.linkedin.com/in/alfaxad-ogesa-65280b2a9/",
        email: "alfaxad@wikiteq.co.ke",
        website: "#"
      }
    },
    
    
  ];

  const teamStats = [
    { icon: <Users className="w-6 h-6" />, value: "10+", label: "Team Members" },
    { icon: <Award className="w-6 h-6" />, value: "10+", label: "Years Combined Experience" },
    { icon: <Zap className="w-6 h-6" />, value: "8+", label: "Tech Specializations" },
    { icon: <Briefcase className="w-6 h-6" />, value: "20+", label: "Projects Delivered" }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-[#009EDA]">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The passionate experts behind WikiTeq. We combine technical excellence with deep 
            understanding of Kenyan business needs.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#009EDA]/10 rounded-2xl mb-4">
                <div className="text-[#009EDA]">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="font-medium text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Profile Image with Gradient Overlay */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-20 z-10`}></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Role Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-semibold text-gray-800">{member.role}</span>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.expertise.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3 border-t pt-4">
                  <a 
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-[#009EDA] hover:text-white transition-colors duration-300"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-[#009EDA] hover:text-white transition-colors duration-300"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={18} />
                  </a>
                  {member.social.website !== "#" && (
                    <a 
                      href={member.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-[#009EDA] hover:text-white transition-colors duration-300"
                      aria-label={`Visit ${member.name}'s website`}
                    >
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#009EDA] to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Passionate about building Kenya's digital future? We're always looking for talented developers, designers, and tech enthusiasts.
            </p>
            <a 
              href="mailto:careers@wikiteq.co.ke"
              className="inline-flex items-center gap-3 bg-white text-[#009EDA] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <Mail size={20} />
              info@wikiteq.co.ke
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;