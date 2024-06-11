export default function Header() {
  return (
    <header className="flex w-full justify-end p-5 ">
      <button type="button" className="nes-btn is-primary">
        <i className="nes-icon trophy"></i>
      </button>
      <div className="nes-dialog absolute top-20">
        <p className="title">Dialog</p>
      </div>
    </header>
  );
}
