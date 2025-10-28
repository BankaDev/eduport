const Logo = ({ tagline = false }) => {
  return (
    <>
      <img
        className="w-[160px]"
        src="https://eduport.webestica.com/assets/images/logo.svg"
        alt="EduPort Logo"
      />

      {tagline && (
        <p className="text-sm text-gray-600 mt-2 max-w-md">
          EduPort education theme, built specifically for education centers dedicated to teaching and engaging learners.
        </p>
      )}
    </>
  );
};

export default Logo;
