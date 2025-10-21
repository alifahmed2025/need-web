import React, { useState } from "react";
import { X, Filter, SlidersHorizontal, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Mock UI Components for self-containment (Assume these are your imported components) ---

// Simple Button Mock
const Button = ({ children, onClick, className = "", variant = "default", size = "default" }: any) => {
  let baseStyle = "px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm flex items-center justify-center";
  if (variant === "outline") baseStyle = "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 " + baseStyle;
  if (variant === "ghost") baseStyle = "text-gray-500 hover:bg-gray-100 " + baseStyle;
  if (variant === "default") baseStyle = "bg-blue-600 text-white hover:bg-blue-700 " + baseStyle;
  if (size === "sm") baseStyle = "px-3 py-1.5 text-sm " + baseStyle;
  if (size === "icon") baseStyle = "w-10 h-10 p-2 " + baseStyle;

  // Added logic for 'text-accent hover:text-white' to match user's original code intent
  if (className.includes("text-accent")) baseStyle = baseStyle.replace("text-gray-500", "text-blue-600");

  return <button onClick={onClick} className={`${baseStyle} ${className}`.trim()}>{children}</button>;
};

// Simple Checkbox Mock
const Checkbox = React.forwardRef(({ checked, onCheckedChange, id }: any, ref) => (
  <button
    id={id}
    type="button"
    role="checkbox"
    aria-checked={checked}
    onClick={() => onCheckedChange(!checked)}
    className={`w-4 h-4 border-2 rounded transition-colors duration-100 flex items-center justify-center ${
      checked ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'
    }`}
  >
    {checked && <Check className="h-3 w-3 text-white" />}
  </button>
));

// Simple Label Mock
const Label = ({ children, htmlFor, className = "" }: any) => (
  <label htmlFor={htmlFor} className={`cursor-pointer ${className}`.trim()}>{children}</label>
);

// Simple Slider Mock (Using basic input range for functionality)
const Slider = ({ min, max, step, value, onValueChange, className = "" }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only supports single range value for mock simplicity, adapting to the provided [min, max] structure
    const newValue = [parseInt(e.target.value), value[1]];
    if (onValueChange) onValueChange(newValue);
  };

  // Note: True dual-thumb slider would require a proper library implementation. 
  // This mock only tracks the 'min' value for simplicity but keeps the layout.
  return (
    <input 
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={handleChange}
        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg ${className}`.trim()}
    />
  );
};


// --- Filter State Interfaces ---
interface FilterState {
  collections: string[]
  availability: string[]
  priceRange: [number, number]
}

// --- Reusable Filter Content Section ---
function FilterContent({
  filters,
  hasActiveFilters,
  clearFilters,
  collections,
  availabilityOptions,
  handleCollectionChange,
  handleAvailabilityChange,
  handlePriceChange,
  isMobileDrawer = false,
}: any) {
  return (
    <div className="space-y-7 p-1">
      {/* Filter Header and Clear All Button */}
      <div className="flex items-center justify-between border-b pb-3 border-gray-100">
        <h3 className="font-extrabold text-xl text-gray-800 flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-blue-600" />
            Product Filters
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-blue-600 hover:text-white hover:bg-red-500/10 transition-all duration-300"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Collections Filter */}
      <div className="space-y-4">
        <h4 className="font-extrabold text-sm uppercase text-gray-700 tracking-wider border-b-2 border-blue-500/50 pb-1 w-fit">
            Collections
        </h4>
        <div className="space-y-3 max-h-64 overflow-y-auto pr-3">
          {collections.map((collection: string) => (
            <div key={collection} className="flex items-center space-x-3">
              <Checkbox
                id={`collection-${collection}`}
                checked={filters.collections.includes(collection)}
                onCheckedChange={(checked: boolean) =>
                  handleCollectionChange(collection, checked)
                }
              />
              <Label
                htmlFor={`collection-${collection}`}
                className="text-base font-normal cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
              >
                {collection}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div className="space-y-4 border-t pt-6">
        <h4 className="font-extrabold text-sm uppercase text-gray-700 tracking-wider border-b-2 border-blue-500/50 pb-1 w-fit">
            Availability
        </h4>
        <div className="space-y-3">
          {availabilityOptions.map((option: string) => (
            <div key={option} className="flex items-center space-x-3">
              <Checkbox
                id={`availability-${option}`}
                checked={filters.availability.includes(option)}
                onCheckedChange={(checked: boolean) =>
                  handleAvailabilityChange(option, checked)
                }
              />
              <Label
                htmlFor={`availability-${option}`}
                className="text-base font-normal cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-4 border-t pt-6">
        <h4 className="font-extrabold text-sm uppercase text-gray-700 tracking-wider border-b-2 border-blue-500/50 pb-1 w-fit">
            Price Range
        </h4>
        <div className="space-y-4 pt-2">
          {/* Note: Mock slider only visually represents the range and changes the lower bound */}
          <Slider
            min={0}
            max={5000}
            step={100}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex items-center justify-between text-base font-semibold text-gray-800">
            <span className="bg-gray-100 px-3 py-1 rounded-md">৳{filters.priceRange[0]}</span>
            <span className="text-gray-500 font-normal">to</span>
            <span className="bg-gray-100 px-3 py-1 rounded-md">৳{filters.priceRange[1]}</span>
          </div>
        </div>
      </div>
      
      {/* Mobile-only Apply button */}
      {isMobileDrawer && (
        <div className="pt-6 border-t">
            <Button onClick={() => window.location.reload()} className="w-full bg-green-500 hover:bg-green-600">
                Apply Filters
            </Button>
        </div>
      )}

    </div>
  )
}


// --- Main ProductFilters Component ---
export function ProductFilters({ onFilterChange }: { onFilterChange: (filters: FilterState) => void }) {
  const [filters, setFilters] = useState<FilterState>({
    collections: [],
    availability: [],
    priceRange: [0, 5000],
  })

  const [mobileOpen, setMobileOpen] = useState(false)

  const collections = [
    "Mustard Oil",
    "Ghee (ঘি)",
    "Honey",
    "Masala",
    "Nuts & Seeds",
    "Tea/Coffee",
    "Homemade",
    "Organic Zone",
    "Dates",
    "Special Items",
  ]

  const availabilityOptions = ["In Stock", "Out of Stock"]

  const handleCollectionChange = (collection: string, checked: boolean) => {
    const newCollections = checked
      ? [...filters.collections, collection]
      : filters.collections.filter((c) => c !== collection)
    const newFilters = { ...filters, collections: newCollections }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleAvailabilityChange = (availability: string, checked: boolean) => {
    const newAvailability = checked
      ? [...filters.availability, availability]
      : filters.availability.filter((a) => a !== availability)
    const newFilters = { ...filters, availability: newAvailability }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handlePriceChange = (value: number[]) => {
    const newFilters = { ...filters, priceRange: [value[0], value[1]] as [number, number] }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const newFilters = {
      collections: [],
      availability: [],
      priceRange: [0, 5000] as [number, number],
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const hasActiveFilters =
    filters.collections.length > 0 ||
    filters.availability.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 5000

  return (
    <div className="relative">
      {/* -------- 1. Mobile Filter Button (Small screens) -------- */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 hover:bg-gray-100"
          onClick={() => setMobileOpen(true)}
        >
          <Filter className="h-5 w-5 text-blue-600" />
          Show Filters ({hasActiveFilters ? "Active" : "None"})
        </Button>
      </div>

      {/* -------- 2. Desktop Sidebar (Left Alignment on Large screens) -------- */}
      {/* Note: The 'w-64' and 'sticky top-5' classes ensure it stays on the left and scrolls with the page */}
      <div className="hidden lg:block w-64 bg-white border border-gray-200 rounded-xl p-5 shadow-lg space-y-6 sticky top-5 h-fit">
        <FilterContent
          filters={filters}
          hasActiveFilters={hasActiveFilters}
          clearFilters={clearFilters}
          collections={collections}
          availabilityOptions={availabilityOptions}
          handleCollectionChange={handleCollectionChange}
          handleAvailabilityChange={handleAvailabilityChange}
          handlePriceChange={handlePriceChange}
        />
      </div>

      {/* -------- 3. Mobile Popup Drawer (Slides in from Right) -------- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer (Sliding from Right) */}
            <motion.div
              className="fixed top-0 left-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl p-6 overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6 border-b pb-3">
                <h3 className="font-bold text-2xl text-gray-800">Filter Options</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-500 hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <FilterContent
                filters={filters}
                hasActiveFilters={hasActiveFilters}
                clearFilters={clearFilters}
                collections={collections}
                availabilityOptions={availabilityOptions}
                handleCollectionChange={handleCollectionChange}
                handleAvailabilityChange={handleAvailabilityChange}
                handlePriceChange={handlePriceChange}
                isMobileDrawer={true}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductFilters;
