"use client"

import React from "react"
import Image from "next/image"


export default function ProtectedImage({
    src,
    alt,
    width,
    height,
    className,
    watermark,
}) {
    return (
        <div
            className={`relative select-none ${className ?? ""}`}
            style={{ width, height }}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="object-cover"
            />

            {/* Transparent overlay to block right-click / drag */}
            <div
                className="absolute inset-0"
                onContextMenu={(e) => e.preventDefault()}
            />

            {/* Optional watermark */}
            {watermark && (
                <div className="absolute bottom-2 right-2 text-xs text-white bg-black/50 px-2 py-1 rounded">
                    {watermark}
                </div>
            )}
        </div>
    )
}