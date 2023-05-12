const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-50px)]">
      <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-[#ff3811]"></div>
    </div>
  );
};

export default LoadingSpinner;
