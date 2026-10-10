const MainSectionContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div id="main" className="relative w-full h-full-screen max-h-[1000px] min-h-[450px] bg-primary overflow-hidden">
      {children}
    </div>
  );
};

export default MainSectionContainer;
