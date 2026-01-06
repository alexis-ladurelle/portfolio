import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags = [],
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      className={`grid gap-8 lg:grid-cols-2 items-center ${
        isEven ? "" : "lg:grid-flow-dense"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}>
      {/* Image */}
      <div
        className={`relative rounded-lg overflow-hidden shadow-xl ${
          isEven ? "" : "lg:col-start-2"
        }`}>
        <img
          src={image}
          alt={title}
          className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div
        className={`space-y-4 ${
          isEven ? "" : "lg:col-start-1 lg:row-start-1"
        }`}>
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {t("projects.viewCode")}
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {t("projects.viewProject")}
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
