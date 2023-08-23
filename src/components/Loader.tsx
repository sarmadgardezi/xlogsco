type LoaderProps = {
  fadeOffLoader: boolean;
};

function Loader({ fadeOffLoader }: LoaderProps) {
  return (
    <div className={'preloader ' + (fadeOffLoader ? 'fadeOff' : '')}>
      <div className="loader"></div>
    </div>
  );
}
export default Loader;
