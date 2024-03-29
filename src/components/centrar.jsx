export default function ContenedorCentrado({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-4 rounded shadow-lg">{children}</div>
    </div>
  );
}
