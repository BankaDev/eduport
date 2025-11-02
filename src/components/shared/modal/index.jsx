import Button from "../button";
import 'animate.css';

const Modal = ({
  open = false,
  close,
  showTitle = true,
  title = "Modal Title",
  children = "Your children go here",
  footer = true,
}) => {
  if (!open) return null;
  

  return (
    <div className="animate__animated animate__fadeIn  fixed top-0 left-0 w-full bg-black bg-opacity-80 min-h-screen flex justify-center items-center">
      <div className="animate__animated animate__zoomIn animate__faster  relative bg-white w-[450px] py-4 px-6 rounded-md flex flex-col gap-6">
        
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-xl text-zinc-500"
        >
          <i className="fa fa-times-circle"></i>
        </button>

        {/* Content */}
        <div className="flex flex-col gap-2">
          {showTitle && <h1 className="font-semibold text-xl">{title}</h1>}
          <div>{children}</div>
        </div>

        {/* Footer */}
        {footer && (
          <div className="flex gap-2 justify-end">
            <Button size="sm" color="success">
              Okay
            </Button>
            <Button size="sm" color="danger" onClick={close}>
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
