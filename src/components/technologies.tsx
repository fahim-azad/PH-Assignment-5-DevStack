import { useEffect, useState } from "react";

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.error("Failed to load technologies:", err));
  }, []);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Popular":
        return "bg-blue-50 text-blue-500 border border-blue-200";
      case "Versatile":
        return "bg-emerald-50 text-emerald-500 border border-emerald-200";
      case "Fast":
        return "bg-orange-50 text-orange-500 border border-orange-200";
      case "SSR / Edge":
        return "bg-purple-50 text-purple-500 border border-purple-200";
      case "Standard":
        return "bg-green-50 text-green-500 border border-green-200";
      case "Top SQL":
        return "bg-blue-50 text-blue-500 border border-blue-200";
      case "Cache":
        return "bg-red-50 text-red-500 border border-red-200";
      case "Ubiquitous":
        return "bg-amber-50 text-amber-500 border border-amber-200";
      case "Essential":
        return "bg-sky-50 text-sky-500 border border-sky-200";
      case "Robust":
        return "bg-blue-50 text-blue-500 border border-blue-200";
      case "Modern":
        return "bg-cyan-50 text-cyan-500 border border-cyan-200";
      case "Containers":
        return "bg-sky-50 text-sky-500 border border-sky-200";
      default:
        return "bg-blue-50 text-blue-500 border border-blue-200";
    }
  };

  const addToStack = (tech: Technology) => {
    if (!stack.some((t) => t.id === tech.id)) {
      setStack([...stack, tech]);
    }
  };

  const removeFromStack = (id: string) => {
    setStack(stack.filter((t) => t.id !== id));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#0F172A] mb-3 tracking-tight">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 xl:gap-8">
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {technologies.map((tech) => {
            const isAdded = stack.some((t) => t.id === tech.id);

            return (
              <div
                key={tech.id}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col h-full border-2 ${isAdded ? "border-purple-500" : "border-gray-100"}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${getBadgeColor(tech.badge)}`}
                  >
                    {tech.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6 flex-1 leading-relaxed">
                  {tech.description}
                </p>

                <div className="flex items-center gap-2 mb-6 text-xs text-slate-500 w-full overflow-hidden border-t border-gray-100 pt-5 mt-auto">
                  <span className="px-2.5 py-1 bg-slate-50 text-slate-600 font-medium rounded-md shrink-0">
                    {tech.category}
                  </span>
                  <span className="font-medium truncate flex-1 text-center">
                    {tech.difficulty}
                  </span>
                  <span className="flex items-center text-yellow-500 font-bold ml-auto shrink-0">
                    {/* {ekhane star er jnno svg use korsi png na namaye} */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-900">{tech.rating}</span>
                  </span>
                </div>

                <button
                  onClick={() => addToStack(tech)}
                  disabled={isAdded}
                  className={`w-full py-2.5 rounded-lg font-medium transition-colors shadow-sm ${
                    isAdded
                      ? "bg-purple-100 text-purple-700 cursor-not-allowed"
                      : "bg-[#0F172A] hover:bg-gray-800 text-white"
                  }`}
                >
                  {isAdded ? "Added to Stack" : "Add to Stack"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full lg:w-60 xl:w-64 shrink-0">
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Your Stack</h3>

            {stack.length === 0 ? (
              <>
                <p className="text-sm text-gray-500 mb-6">
                  No technologies selected yet.
                </p>

                <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center text-center">
                  <span className="text-sm text-gray-400 font-medium">
                    Your stack is empty.
                  </span>
                </div>
              </>
            ) : (
              <>
                <p className="text-[15px] text-slate-400 mb-6">
                  {stack.length} Technology Selected
                </p>

                <div className="flex flex-col gap-3 mb-8">
                  {stack.map((tech) => (
                    <div
                      key={tech.id}
                      className="flex items-center justify-between p-3.5 border border-gray-200 rounded-xl bg-white shadow-sm"
                    >
                      <div className="flex items-center gap-3.5 overflow-hidden">
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col overflow-hidden leading-tight">
                          <span className="font-bold text-[15px] text-[#0F172A] truncate">
                            {tech.name}
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium truncate mt-0.5">
                            {tech.category}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromStack(tech.id)}
                        className="text-slate-400 hover:text-slate-600 transition-colors shrink-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setStack([])}
                  className="w-full py-2.5 rounded-xl font-bold text-[#DC2626] border border-[#FECACA] hover:bg-red-50 transition-colors"
                >
                  Remove All
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
