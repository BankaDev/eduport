import { useState } from "react";
import Button from "../../shared/button";

const Courses = () => {
  const courses = [
    // 🧑‍💻 DEVELOPMENT
    {
      thumbnail: "https://eduport.webestica.com/assets/images/courses/4by3/11.jpg",
      title: "Complete Python Bootcamp: From Zero to Hero",
      desc: "Learn Python by building real-world projects and automating tasks.",
      rating: 4.8,
      duration: "15hr 45min",
      lectures: 30,
      category: "Development",
    },
    {
      thumbnail: "https://eduport.webestica.com/assets/images/courses/4by3/08.jpg",
      title: "React & Tailwind CSS: Build Modern Web Apps",
      desc: "Create beautiful responsive UIs using React and Tailwind CSS.",
      rating: 4.6,
      duration: "11hr 10min",
      lectures: 26,
      category: "Development",
    },
    {
      thumbnail: "https://eduport.webestica.com/assets/images/courses/4by3/10.jpg",
      title: "Full-Stack Web Development with Node.js",
      desc: "Master backend and frontend integration using modern JS stacks.",
      rating: 4.7,
      duration: "18hr 25min",
      lectures: 35,
      category: "Development",
    },

    // 🎨 GRAPHIC DESIGN
    {
      thumbnail: "https://eduport.webestica.com/assets/images/courses/4by3/13.jpg",
      title: "The Ultimate Drawing Course - Beginner to Advanced",
      desc: "Master sketching and drawing fundamentals for design professionals.",
      rating: 4.6,
      duration: "18hr 5min",
      lectures: 28,
      category: "Graphic Design",
    },
    {
      thumbnail: "https://eduport.webestica.com/assets/images/courses/4by3/15.jpg",
      title: "Adobe Illustrator Mastery: From Basics to Expert",
      desc: "Design stunning vector graphics and logos with Illustrator.",
      rating: 4.9,
      duration: "14hr 30min",
      lectures: 25,
      category: "Graphic Design",
    },
    {
      thumbnail: "https://eduport.webestica.com/assets/images/courses/4by3/16.jpg",
      title: "UI/UX Design with Figma: Complete Guide",
      desc: "Learn to design user interfaces with real-world Figma projects.",
      rating: 4.8,
      duration: "12hr 50min",
      lectures: 20,
      category: "Graphic Design",
    },

    // 📈 MARKETING
    {
      thumbnail: "https://eduport.webestica.com/assets/images/courses/4by3/09.jpg",
      title: "Digital Marketing Masterclass",
      desc: "A complete guide to SEO, Google Ads, and social media strategy.",
      rating: 4.7,
      duration: "10hr 20min",
      lectures: 22,
      category: "Marketing",
    },
    {
      thumbnail: "https://eduport.webestica.com/assets/images/courses/4by3/17.jpg",
      title: "Social Media Marketing for Beginners",
      desc: "Grow your business using Instagram, Facebook, and TikTok.",
      rating: 4.5,
      duration: "8hr 40min",
      lectures: 18,
      category: "Marketing",
    },
    {
      thumbnail: "https://eduport.webestica.com/assets/images/courses/4by3/18.jpg",
      title: "Google Ads & Analytics Crash Course",
      desc: "Learn how to run effective ad campaigns and track ROI.",
      rating: 4.6,
      duration: "6hr 10min",
      lectures: 16,
      category: "Marketing",
    },

    // 💰 FINANCE
    {
      thumbnail: "https://eduport.webestica.com/assets/images/courses/4by3/19.jpg",
      title: "Financial Analysis & Investment Basics",
      desc: "Learn to read balance sheets and analyze investments smartly.",
      rating: 4.8,
      duration: "9hr 30min",
      lectures: 20,
      category: "Finance",
    },
    {
      thumbnail: "https://eduport.webestica.com/assets/images/courses/4by3/20.jpg",
      title: "Excel for Financial Modeling",
      desc: "Build dynamic financial models using advanced Excel functions.",
      rating: 4.7,
      duration: "7hr 45min",
      lectures: 15,
      category: "Finance",
    },
    {
      thumbnail: "https://eduport.webestica.com/assets/images/courses/4by3/21.jpg",
      title: "Personal Finance & Wealth Management",
      desc: "Create a financial plan and manage your wealth for the long term.",
      rating: 4.9,
      duration: "12hr 10min",
      lectures: 25,
      category: "Finance",
    },
  ];

  // state
  const [data, setData] = useState(courses);
  const [active, setActive] = useState("All");

  // derive unique categories
  const menus = courses.map((m) => m.category);
  const uniqueMenus = [...new Set(menus)];

  // handler to filter
  const onTab = (category) => {
    setActive(category);
    if (category === "All") {
      setData(courses);
      return;
    }
    const filtered = courses.filter((item) => item.category === category);
    setData(filtered);
  };

  // helpful small util: render stars (full and empty) up to 5
  const renderStars = (rating) => {
    const full = Math.floor(rating); // full stars
    const empty = 5 - full;
    const stars = [];
    for (let i = 0; i < full; i++) {
      stars.push(<i key={`f-${i}`} className="fa fa-star text-[11px]" aria-hidden="true" />);
    }
    for (let i = 0; i < empty; i++) {
      stars.push(<i key={`e-${i}`} className="fa fa-star-o text-[11px]" aria-hidden="true" />);
    }
    return stars;
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">🎓 Most Popular Courses</h1>
      <p className="text-sm text-gray-600">Choose from hundreds of courses from specialist organizations</p>

      {/* Tabs */}
      <div className="bg-blue-200 p-4 flex justify-center gap-3 mt-6 rounded-md flex-wrap">
        {/* All button */}
        <Button
          size="sm"
          className={`capitalize ${active === "All" ? "bg-white shadow-sm" : ""}`}
          onClick={() => onTab("All")}
        >
          All
        </Button>

        {uniqueMenus.map((item) => (
          <Button
            key={item}
            size="sm"
            variant="text"
            className={`capitalize ${active === item ? "bg-white shadow-sm" : ""}`}
            onClick={() => onTab(item)}
          >
            {item}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {data.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
            aria-labelledby={`course-${index}-title`}
          >
            {/* Thumbnail */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            {/* Card Content */}
            <div className="p-5">
              {/* Title */}
              <h2
                id={`course-${index}-title`}
                className="text-lg font-semibold mb-1 text-gray-800 hover:text-indigo-600 transition-colors duration-200"
              >
                {item.title}
              </h2>

              {/* Description */}
              {/* Note: `line-clamp-2` requires the Tailwind line-clamp plugin; replace with `truncate`/manual height if not installed */}
              <p className="text-gray-600 mb-4 text-sm line-clamp-2">{item.desc}</p>

              {/* Rating & Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-3">
                <div className="flex items-center gap-1 text-yellow-500">
                  <span className="flex items-center gap-0.5">
                    {renderStars(item.rating)}
                  </span>
                  <span className="text-gray-600 ml-1">{item.rating.toFixed(1)}/5.0</span>
                </div>

                {/* Course Meta */}
                <div className="flex items-center gap-4 text-gray-500">
                  <span className="flex items-center gap-1">
                    <i className="fa fa-clock text-[11px]" aria-hidden="true" /> {item.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fa fa-play-circle text-[11px]" aria-hidden="true" /> {item.lectures} Lectures
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Courses;
