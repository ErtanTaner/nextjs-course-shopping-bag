import Products from "./Products";
import ErrorBoundary from "../../components/ErrorBoundary";
export default async function ProductsPage({ params }) {
  const category = (await params).category?.[0] || undefined;
  return (
    <div className="product-page">
      <div className={`page-header`}>
        <h1>Products Page</h1>
      </div>
      <ErrorBoundary fallback="There is a problem with products loading, please refresh the page">
        <Products category={category} />
      </ErrorBoundary>
    </div>
  );
}
