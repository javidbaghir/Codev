import { Link } from "react-router-dom";

interface Teacher {
  img: string;
  name: string;
  position: string;
  linkedinLink: string;
}

const TeacherCard: React.FC<Teacher> = ({ img, name, position, linkedinLink }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 border rounded-xl min-h-[300px] w-[300px] bg-white shadow-md hover:shadow-lg transition-shadow">
      <figure className="relative group w-[90px] h-[90px] rounded-full overflow-hidden mb-4">
        <img
          src={img}
          alt={`${name} şəkili`}
          className="w-full h-full object-cover "
        />
        <div
          className="absolute top-0 left-0 w-full h-full bg-blue-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Link
            to={linkedinLink}
            target="_blank"
            className="text-white text-sm font-semibold underline"
          >
            LinkedIn
          </Link>
        </div>
      </figure>
      <div className="text-center space-y-2">
        <p className="text-lg font-bold text-gray-800">{name}</p>
        <p className="text-md text-gray-600">{position}</p>
      </div>

    </div>
  );
};

export default TeacherCard;
