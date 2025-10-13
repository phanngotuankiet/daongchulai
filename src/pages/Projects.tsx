import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useQuery } from '@apollo/client';
import { AdminPostsDocument } from '../generated/graphql';
import { Tooltip } from '../components/common/Tooltip';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState<{ src: string }[]>([]);

  // Fetch posts from database (using posts as projects)
  const { data: postsData, loading } = useQuery(AdminPostsDocument);

  // Transform posts to project format
  const projects = postsData?.posts?.map(post => ({
    id: post.id.toString(),
    name: post.title,
    location: "Quảng Nam", // Default location
    description: post.body,
    images: [], // Posts don't have images yet, will be empty for now
    stoneType: "Đá ong Chu Lai" // Default stone type
  })) || [];

  const filteredProjects = projects; // For now, show all projects

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

        {/* Loading state */}
        {loading && (
          <div className="text-center py-8">
            <div className="text-gray-500">Đang tải dự án...</div>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects?.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Placeholder image since posts don't have images yet */}
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p>Chưa có ảnh</p>
                    </div>
                  </div>
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
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">Chưa có dự án nào được đăng.</p>
              </div>
            )}
          </div>
        )}
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