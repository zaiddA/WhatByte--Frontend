export default function ProductPage({ params }: { params: { id: string } }) {
  // Access id directly from params prop, no need for use hook
  const { id } = params;

  const product = products.find((p) => p.id === Number(id));

  return (
    <div>
      {/* Render your product component here */}
    </div>
  );
} 