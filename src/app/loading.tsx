export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-900"
        data-testid="loader"
      ></div>
    </div>
  );
}
