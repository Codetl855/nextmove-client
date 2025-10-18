import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadedImageCard from "@/components/addProperty/UploadedImageCard";

const MAX_FILE_SIZE_MB = 3;

interface ImageUploaderProps {
  onImagesChange?: (files: File[]) => void; // callback to send valid images to parent
  initialImageUrls?: string[]; // for edit mode, show already uploaded images
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImagesChange, initialImageUrls = [] }) => {
  const [images, setImages] = useState<string[]>(initialImageUrls);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: any[]) => {
      const validFiles: File[] = [];
      const invalidFiles: string[] = [];

      acceptedFiles.forEach((file) => {
        if (
          ["image/jpeg", "image/jpg", "image/png"].includes(file.type) &&
          file.size <= MAX_FILE_SIZE_MB * 1024 * 1024
        ) {
          validFiles.push(file);
        } else {
          invalidFiles.push(file.name);
        }
      });

      if (invalidFiles.length > 0) {
        setError(
          `Some files were rejected: ${invalidFiles.join(
            ", "
          )}. Only JPEG/PNG under ${MAX_FILE_SIZE_MB}MB allowed.`
        );
        setTimeout(() => setError(null), 4000);
      }

      // Convert valid files to preview URLs
      const imageUrls = validFiles.map((file) => URL.createObjectURL(file));

      // Update local state
      setImages((prev) => [...prev, ...imageUrls]);
      setSelectedFiles((prev) => [...prev, ...validFiles]);

      // Send valid files to parent
      if (onImagesChange) {
        onImagesChange([...selectedFiles, ...validFiles]);
      }
    },
    [onImagesChange, selectedFiles]
  );

  const handleRemove = (index: number) => {
    const updatedPreviews = [...images];
    const updatedFiles = [...selectedFiles];

    updatedPreviews.splice(index, 1);
    updatedFiles.splice(index, 1);

    setImages(updatedPreviews);
    setSelectedFiles(updatedFiles);

    if (onImagesChange) {
      onImagesChange(updatedFiles);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    multiple: true,
  });

  return (
    <div className="bg-white p-4 rounded-xl">
      {/* Upload Box */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl flex flex-col justify-center items-center h-40 cursor-pointer transition ${
          isDragActive
            ? "border-aztec bg-aztec-light/60"
            : "border-gray-300 bg-aztec-light"
        }`}
      >
        <input {...getInputProps()} />
        <span className="icon-[ic--outline-cloud-upload] text-5xl text-aztec"></span>
        <p className="max-w-[220px] text-sm text-center mt-2">
          {isDragActive
            ? "Drop images here..."
            : "Drop your images here, or click to browse"}
        </p>
        <span className="text-xs text-gray-400 mt-1">
          Max file size: {MAX_FILE_SIZE_MB}MB (jpeg | png)
        </span>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 text-red-700 border border-red-300 text-sm rounded-lg px-3 py-2 mb-4">
          {error}
        </div>
      )}

      {/* Uploaded Images */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4">
          {images.map((img, index) => (
            <UploadedImageCard
              key={index}
              img={img}
              index={index}
              onRemove={handleRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
