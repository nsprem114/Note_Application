export default function RateLimitedUI() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Too Many Requests
        </h1>

        <p className="text-gray-600 mb-6">
          You’ve sent too many requests in a short time. Please wait a moment
          before trying again.
        </p>

        <div className="flex justify-center gap-3">
          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Retry
          </button>

          <button className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Go Back
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          If the issue persists, contact support.
        </p>
      </div>
    </div>
  );
}
