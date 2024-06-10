export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex">
        <button type="button" className="nes-btn is-primary">
          Primary
        </button>
        <button type="button" className="nes-btn is-success">
          Success
        </button>
        <button type="button" className="nes-btn is-warning">
          Warning
        </button>
      </div>
    </main>
  );
}
