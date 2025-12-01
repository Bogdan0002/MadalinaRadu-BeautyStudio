import Link from "next/link";
import { Product } from "@/data/products";
import ImageWithFallback from "@/components/ImageWithFallback";
import Card from "@/components/ui/Card";

interface ProductCardProps {
  product: Product;
}

const imageMap: Record<string, string> = {
  "aparat-epilare-laser-diode-ndyag": "/images/product-ndyag.jpg",
  "aparat-epilare-laserice": "/images/product-laserice.jpg",
  "hyaluron-pen-pro-automat": "/images/product-hyaluron-pen.jpg",
  "laserice-uk-delivery": "/images/product-laserice-uk.jpg",
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col group">
      <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
        <ImageWithFallback
          src={imageMap[product.slug] || "/images/product-default.jpg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.isOnSale && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-purple to-brand-teal text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">
            🔥 La reducere
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-indigo/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold text-brand-indigo dark:text-white mb-3 group-hover:text-brand-purple dark:group-hover:text-brand-teal transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-brand-indigo/70 dark:text-white/70 text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
          {product.shortDescription}
        </p>
        <p className="text-xl sm:text-2xl font-bold text-brand-purple dark:text-brand-teal mb-6">
          {product.priceRange}
        </p>
        <div className="flex gap-3 mt-auto">
          <Link
            href="#"
            className="flex-1 text-center px-4 py-3 bg-brand-peach/50 text-brand-indigo rounded-xl text-sm font-semibold hover:bg-brand-peach transition-all hover:scale-105"
          >
            Detalii
          </Link>
          <Link
            href="/contact"
            className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-brand-purple to-brand-teal text-white rounded-xl text-sm font-semibold hover:from-brand-teal hover:to-brand-blue transition-all hover:scale-105 shadow-lg"
          >
            Ofertă
          </Link>
        </div>
      </div>
    </Card>
  );
}

