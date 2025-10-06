"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"

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
    <div className="bg-card border rounded-lg p-6 space-y-6 sticky top-24">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Filters</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-accent hover:text-accent">
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Collections Filter */}
      <div className="space-y-3">
        <h4 className="font-semibold text-sm">Collections</h4>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {collections.map((collection) => (
            <div key={collection} className="flex items-center space-x-2">
              <Checkbox
                id={`collection-${collection}`}
                checked={filters.collections.includes(collection)}
                onCheckedChange={(checked) => handleCollectionChange(collection, checked as boolean)}
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

      {/* Availability Filter */}
      <div className="space-y-3 border-t pt-6">
        <h4 className="font-semibold text-sm">Availability</h4>
        <div className="space-y-2">
          {availabilityOptions.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`availability-${option}`}
                checked={filters.availability.includes(option)}
                onCheckedChange={(checked) => handleAvailabilityChange(option, checked as boolean)}
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

      {/* Price Range Filter */}
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
