import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import mauCongTrinh from '../data/mau-cong-trinh.json';
import { Tooltip } from '../components/common/Tooltip';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState<{ src: string }[]>([]);

  const filteredProjects = selectedCategory
    ? mauCongTrinh.categories.find(cat => cat.id === selectedCategory)?.projects
    : mauCongTrinh.categories.flatMap(cat => cat.projects);

  const handleImageClick = (images: string[], index: number) => {
    setCurrentSlides(images.map(img => ({ src: img })));
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-gray-500 mb-8">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:text-gray-700">Trang chủ</a>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700">Mẫu công trình</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mẫu công trình đá ong
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá các công trình tiêu biểu sử dụng đá ong Chu Lai
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full ${
              selectedCategory === null
                ? 'bg-amber-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Tất cả
          </button>
          {mauCongTrinh.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-amber-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects?.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="h-64"
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Tooltip content="Click để xem ảnh phóng to">
                      <img
                        src={image}
                        alt={`${project.name} - Ảnh ${index + 1}`}
                        className="w-full h-64 object-cover cursor-pointer"
                        onClick={() => handleImageClick(project.images, index)}
                      />
                    </Tooltip>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>
                    <span className="font-medium">Địa điểm:</span> {project.location}
                  </p>
                  <p>
                    <span className="font-medium">Loại đá:</span> {project.stoneType}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={currentIndex}
        slides={currentSlides}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
      />
    </div>
  );
};

export default Projects; 