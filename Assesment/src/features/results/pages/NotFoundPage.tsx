import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-neutral-200 mb-2">404</h1>
        <p className="text-[0.8125rem] text-neutral-500 mb-4">
          The page you're looking for doesn't exist.
        </p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-[0.8125rem] text-neutral-600 hover:text-neutral-900 underline underline-offset-2 decoration-neutral-300"
        >
          ← Back to Workbench
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
