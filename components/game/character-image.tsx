"use client"

import Image from "next/image"
import { useState } from "react"
import { ImageOff } from "lucide-react"

interface CharacterImageProps {
  src: string
  alt: string
  showName?: string
  showTitle?: string
}

export function CharacterImage({ src, alt, showName, showTitle }: CharacterImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-card shadow-lg">
        {hasError ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageOff className="h-12 w-12" />
            <span className="text-sm">Image unavailable</span>
          </div>
        ) : (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              </div>
            )}
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain p-4"
              onError={() => setHasError(true)}
              onLoad={() => setIsLoading(false)}
              unoptimized
            />
          </>
        )}
      </div>
      {showName && (
        <div className="text-center">
          <p className="text-lg font-bold text-foreground">{showName}</p>
          {showTitle && (
            <p className="text-sm text-muted-foreground">from {showTitle}</p>
          )}
        </div>
      )}
    </div>
  )
}
