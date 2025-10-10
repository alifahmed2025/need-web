"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { X, Filter } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  collections: string[]
  availability: string[]
  priceRange: [number, number]
}

export function ProductFilters({ onFilterChange }: ProductFiltersProps) {
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
    <>
      {/* -------- Mobile Filter Button -------- */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          onClick={() => setMobileOpen(true)}
        >
          <Filter className="h-5 w-5" />
          Filters
        </Button>
      </div>

      {/* -------- Desktop Sidebar -------- */}
      <div className="hidden lg:block bg-card border rounded-lg p-6 space-y-6 sticky top-24">
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

      {/* -------- Mobile Popup Drawer -------- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl p-5 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Filters</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" />
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
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

/* ------------ Reusable Filter Content Section ------------ */
function FilterContent({
  filters,
  hasActiveFilters,
  clearFilters,
  collections,
  availabilityOptions,
  handleCollectionChange,
  handleAvailabilityChange,
  handlePriceChange,
}: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg"></h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-accent hover:text-white"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Collections */}
      <div className="space-y-3">
        <h4 className="font-semibold text-sm">Collections</h4>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {collections.map((collection: string) => (
            <div key={collection} className="flex items-center space-x-2">
              <Checkbox
                id={`collection-${collection}`}
                checked={filters.collections.includes(collection)}
                onCheckedChange={(checked) =>
                  handleCollectionChange(collection, checked as boolean)
                }
              />
              <Label
                htmlFor={`collection-${collection}`}
                className="text-sm font-normal cursor-pointer hover:text-accent"
              >
                {collection}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="space-y-3 border-t pt-6">
        <h4 className="font-semibold text-sm">Availability</h4>
        <div className="space-y-2">
          {availabilityOptions.map((option: string) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`availability-${option}`}
                checked={filters.availability.includes(option)}
                onCheckedChange={(checked) =>
                  handleAvailabilityChange(option, checked as boolean)
                }
              />
              <Label
                htmlFor={`availability-${option}`}
                className="text-sm font-normal cursor-pointer hover:text-accent"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4 border-t pt-6">
        <h4 className="font-semibold text-sm">Price Range</h4>
        <div className="space-y-4">
          <Slider
            min={0}
            max={5000}
            step={100}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">৳{filters.priceRange[0]}</span>
            <span className="text-muted-foreground">to</span>
            <span className="font-medium">৳{filters.priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
