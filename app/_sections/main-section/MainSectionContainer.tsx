const MainSectionContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div
      id="main"
      className="
        relative w-full h-screen
        max-h-[900px] min-h-[450px]
        bg-primary overflow-hidden
      "
    >
      {children}
    </div>
  );
};

export default MainSectionContainer;
