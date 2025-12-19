export default function StoreBuilderPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Store Builder</h1>
      <p className="text-gray-600 mb-6">Customize your storefront layout, pages, and navigation.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded p-4 bg-white shadow-sm">
          <h2 className="font-semibold mb-2">Choose Theme</h2>
          <p className="text-sm text-gray-500">Select a theme for your store.</p>
        </div>
        <div className="border rounded p-4 bg-white shadow-sm">
          <h2 className="font-semibold mb-2">Edit Pages</h2>
          <p className="text-sm text-gray-500">Create and manage your store pages.</p>
        </div>
      </div>
    </div>
  );
}
