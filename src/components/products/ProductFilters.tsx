"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const brands = [
    { id: "rolex", name: "Rolex" },
    { id: "patek-philippe", name: "Patek Philippe" },
    { id: "audemars-piguet", name: "Audemars Piguet" },
    { id: "omega", name: "Omega" },
    { id: "tag-heuer", name: "TAG Heuer" },
    { id: "cartier", name: "Cartier" },
    { id: "iwc", name: "IWC" },
    { id: "panerai", name: "Panerai" },
    { id: "breitling", name: "Breitling" },
    { id: "jaeger-lecoultre", name: "Jaeger-LeCoultre" },
]

const categories = [
    { id: "luxury", name: "Luxury" },
    { id: "sport", name: "Sport" },
    { id: "diving", name: "Diving" },
    { id: "dress", name: "Dress" },
    { id: "pilot", name: "Pilot" },
    { id: "chronograph", name: "Chronograph" },
]

const materials = [
    { id: "stainless-steel", name: "Stainless Steel" },
    { id: "gold", name: "Gold" },
    { id: "platinum", name: "Platinum" },
    { id: "titanium", name: "Titanium" },
    { id: "ceramic", name: "Ceramic" },
    { id: "carbon", name: "Carbon" },
]

export default function ProductFilters() {
    const [priceRange, setPriceRange] = useState([0, 50000])
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])

    const handleBrandChange = (brandId: string) => {
        setSelectedBrands((prev) => (prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]))
    }

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategories((prev) =>
            prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
        )
    }

    const handleMaterialChange = (materialId: string) => {
        setSelectedMaterials((prev) =>
            prev.includes(materialId) ? prev.filter((id) => id !== materialId) : [...prev, materialId],
        )
    }

    const clearAllFilters = () => {
        setPriceRange([0, 50000])
        setSelectedBrands([])
        setSelectedCategories([])
        setSelectedMaterials([])
    }

    const hasActiveFilters =
        selectedBrands.length > 0 ||
        selectedCategories.length > 0 ||
        selectedMaterials.length > 0 ||
        priceRange[0] > 0 ||
        priceRange[1] < 50000

    return (
        <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium">Filters</h2>
                {hasActiveFilters && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAllFilters}
                        className="text-sm text-slate-500 hover:text-slate-700"
                    >
                        Clear all
                        <X className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>

            <Accordion type="multiple" defaultValue={["price", "brand", "category", "material"]} className="space-y-4">
                <AccordionItem value="price" className="border-b-0">
                    <AccordionTrigger className="py-4 text-base font-medium">Price Range</AccordionTrigger>
                    <AccordionContent>
                        <div className="pt-2 pb-6">
                            <Slider
                                defaultValue={[0, 50000]}
                                max={50000}
                                step={1000}
                                value={priceRange}
                                onValueChange={setPriceRange}
                                className="my-6"
                            />
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-slate-500">${priceRange[0].toLocaleString()}</p>
                                <p className="text-sm text-slate-500">${priceRange[1].toLocaleString()}</p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="brand" className="border-b-0">
                    <AccordionTrigger className="py-4 text-base font-medium">Brand</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4 pt-2 pb-6">
                            {brands.map((brand) => (
                                <div key={brand.id} className="flex items-center">
                                    <Checkbox
                                        id={`brand-${brand.id}`}
                                        checked={selectedBrands.includes(brand.id)}
                                        onCheckedChange={() => handleBrandChange(brand.id)}
                                    />
                                    <Label htmlFor={`brand-${brand.id}`} className="ml-2 text-sm font-normal cursor-pointer">
                                        {brand.name}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="category" className="border-b-0">
                    <AccordionTrigger className="py-4 text-base font-medium">Category</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4 pt-2 pb-6">
                            {categories.map((category) => (
                                <div key={category.id} className="flex items-center">
                                    <Checkbox
                                        id={`category-${category.id}`}
                                        checked={selectedCategories.includes(category.id)}
                                        onCheckedChange={() => handleCategoryChange(category.id)}
                                    />
                                    <Label htmlFor={`category-${category.id}`} className="ml-2 text-sm font-normal cursor-pointer">
                                        {category.name}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="material" className="border-b-0">
                    <AccordionTrigger className="py-4 text-base font-medium">Material</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4 pt-2 pb-6">
                            {materials.map((material) => (
                                <div key={material.id} className="flex items-center">
                                    <Checkbox
                                        id={`material-${material.id}`}
                                        checked={selectedMaterials.includes(material.id)}
                                        onCheckedChange={() => handleMaterialChange(material.id)}
                                    />
                                    <Label htmlFor={`material-${material.id}`} className="ml-2 text-sm font-normal cursor-pointer">
                                        {material.name}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
