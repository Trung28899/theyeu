import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import ImageSkeleton from "@/modules/common/components/Skeleton/ImageSkeleton";

interface Props extends ImageProps {
  className?: string;
  loading?: "lazy" | "eager";
  skeletonHeight?: string;
}

function OptimizedImage({
  className,
  loading,
  skeletonHeight,
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {!loaded && (
        <div style={{ position: "absolute" }} className={className}>
          <ImageSkeleton height={skeletonHeight || "100%"} />
        </div>
      )}

      <Image
        className={className}
        loading={loading || "lazy"}
        onLoadingComplete={() => setLoaded(true)}
        width={100}
        height={100}
        {...props}
        alt={props.alt || ""}
      />
    </div>
  );
}

export default OptimizedImage;
