
import React from 'react';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

export const Gallery = ({ images, className }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
  };
  
  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}>
        {images.map((image) => (
          <div 
            key={image.id}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-[1.01]"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative aspect-[4/3]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {image.description && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
                  {image.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] p-0 bg-black border-none">
          <div className="relative h-full flex flex-col">
            {/* Navigation buttons */}
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-20"
              aria-label="Image précédente"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-20"
              aria-label="Image suivante"
            >
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-20"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
            
            {/* Image container */}
            {selectedImage && (
              <div className="flex flex-col h-full">
                <div className="flex-1 flex items-center justify-center p-4">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {selectedImage.description && (
                  <div className="bg-black/80 text-white p-4">
                    <p>{selectedImage.description}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
